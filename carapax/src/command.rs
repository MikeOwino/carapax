use crate::{
    convert::TryFromUpdate,
    handler::{Handler, HandlerResult},
};
use async_trait::async_trait;
use shellwords::MismatchedQuotes;
use std::{collections::HashMap, error::Error, fmt, string::FromUtf16Error};
use tgbot::types::{Message, Update};

/// A simple commands handler
#[derive(Default)]
pub struct CommandDispatcher<C> {
    handlers: HashMap<String, Box<dyn Handler<C, Input = Command, Output = HandlerResult> + Send>>,
    not_found_handler: Option<Box<dyn Handler<C, Input = Command, Output = HandlerResult> + Send>>,
}

impl<C> CommandDispatcher<C>
where
    C: Send,
{
    /// Registers a command handler
    ///
    /// # Arguments
    ///
    /// * name - Command name (starts with /)
    /// * handler - Handler itself
    pub fn add_handler<N, H>(&mut self, name: N, handler: H)
    where
        N: Into<String>,
        H: Handler<C, Input = Command> + Send + 'static,
    {
        self.handlers.insert(name.into(), ConvertHandler::boxed(handler));
    }

    /// Sets a handler to be executed when the command is not found
    pub fn set_not_found_handler<H>(&mut self, handler: H)
    where
        H: Handler<C, Input = Command> + Send + 'static,
    {
        self.not_found_handler = Some(ConvertHandler::boxed(handler));
    }
}

#[async_trait]
impl<C> Handler<C> for CommandDispatcher<C>
where
    C: Send,
{
    type Input = Command;
    type Output = HandlerResult;

    async fn handle(&mut self, context: &mut C, input: Self::Input) -> Self::Output {
        match self.handlers.get_mut(input.get_name()) {
            Some(handler) => handler.handle(context, input).await,
            None => match self.not_found_handler {
                Some(ref mut handler) => handler.handle(context, input).await,
                None => HandlerResult::Continue,
            },
        }
    }
}

struct ConvertHandler<H>(H);

impl<H> ConvertHandler<H> {
    fn boxed(handler: H) -> Box<Self> {
        Box::new(Self(handler))
    }
}

#[async_trait]
impl<C, H> Handler<C> for ConvertHandler<H>
where
    C: Send,
    H: Handler<C, Input = Command> + Send,
{
    type Input = Command;
    type Output = HandlerResult;

    async fn handle(&mut self, context: &mut C, input: Self::Input) -> Self::Output {
        self.0.handle(context, input).await.into()
    }
}

/// Contains information about command
///
/// You can use this struct as input type in your handler
#[derive(Clone, Debug)]
pub struct Command {
    name: String,
    args: Vec<String>,
    update: Update,
}

impl Command {
    /// Returns command name with leading slash
    pub fn get_name(&self) -> &str {
        &self.name
    }

    /// Returns a list of arguments
    pub fn get_args(&self) -> &[String] {
        &self.args
    }

    /// Returns an update where command comes from
    pub fn get_update(&self) -> &Update {
        &self.update
    }

    /// Returns a message where command comes from
    pub fn get_message(&self) -> &Message {
        // It should never panic as the command can be created only from a message
        self.update.get_message().expect("Can not get command message")
    }
}

/// An error when parsing command
#[derive(Debug)]
pub enum CommandError {
    /// Failed to create an UTF-16 string when reading command from a message
    Utf16(FromUtf16Error),
    /// An error when splitting a string with mismatched quotes
    MismatchedQuotes(MismatchedQuotes),
}

impl From<FromUtf16Error> for CommandError {
    fn from(err: FromUtf16Error) -> Self {
        Self::Utf16(err)
    }
}

impl From<MismatchedQuotes> for CommandError {
    fn from(err: MismatchedQuotes) -> Self {
        Self::MismatchedQuotes(err)
    }
}

impl Error for CommandError {
    fn source(&self) -> Option<&(dyn Error + 'static)> {
        Some(match self {
            CommandError::Utf16(err) => err,
            CommandError::MismatchedQuotes(_) => return None,
        })
    }
}

impl fmt::Display for CommandError {
    fn fmt(&self, out: &mut fmt::Formatter) -> fmt::Result {
        write!(
            out,
            "failed to parse command: {}",
            match self {
                CommandError::Utf16(err) => err.to_string(),
                CommandError::MismatchedQuotes(_) => String::from("mismatched quotes"),
            }
        )
    }
}

impl TryFromUpdate for Command {
    type Error = CommandError;

    fn try_from_update(update: Update) -> Result<Option<Self>, Self::Error> {
        Ok(match update.get_message() {
            Some(message) => {
                match (&message.commands, message.get_text()) {
                    (Some(commands), Some(text)) => {
                        // tgbot guarantees that commands will never be empty, but we must be sure
                        assert!(!commands.is_empty());
                        // just take first command and ignore others
                        let command = &commands[0];
                        let name = command.command.clone();
                        // assume that all text after command is arguments
                        let pos = command.data.offset + command.data.length;
                        // pos is UTF-16 offset
                        let raw_args: Vec<u16> = text.data.encode_utf16().skip(pos).collect();
                        let raw_args = String::from_utf16(&raw_args)?;
                        let args = shellwords::split(&raw_args)?;
                        Some(Command { name, args, update })
                    }
                    _ => None,
                }
            }
            None => None,
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    fn create_command(command: &str) -> Command {
        let len = command.split(" ").next().unwrap().len();
        Command::try_from_update(
            serde_json::from_value(serde_json::json!(
                {
                    "update_id": 1,
                    "message": {
                        "message_id": 1111,
                        "date": 0,
                        "from": {"id": 1, "is_bot": false, "first_name": "test"},
                        "chat": {"id": 1, "type": "private", "first_name": "test"},
                        "text": command,
                        "entities": [
                            {"type": "bot_command", "offset": 0, "length": len}
                        ]
                    }
                }
            ))
            .unwrap(),
        )
        .unwrap()
        .unwrap()
    }

    #[tokio::test]
    async fn command() {
        let command = create_command("/testcommand 'arg1 v' arg2");
        assert_eq!(command.get_name(), "/testcommand");
        assert_eq!(command.get_args(), &["arg1 v", "arg2"]);
        assert_eq!(command.get_update().id, 1);
    }

    type Commands = Vec<String>;

    struct MockHandler;

    #[async_trait]
    impl Handler<Commands> for MockHandler {
        type Input = Command;
        type Output = ();

        async fn handle(&mut self, context: &mut Commands, input: Self::Input) -> Self::Output {
            context.push(input.get_name().to_string());
        }
    }

    #[tokio::test]
    async fn dispatch() {
        let mut context = Commands::new();
        let mut dispatcher = CommandDispatcher::default();
        dispatcher.add_handler("/start", MockHandler);
        dispatcher.set_not_found_handler(MockHandler);
        let command = create_command("/start arg1");
        dispatcher.handle(&mut context, command).await;
        let command = create_command("/notfound");
        dispatcher.handle(&mut context, command).await;
        assert_eq!(context.len(), 2);
        assert!(context.contains(&String::from("/start")));
        assert!(context.contains(&String::from("/notfound")));
    }
}
