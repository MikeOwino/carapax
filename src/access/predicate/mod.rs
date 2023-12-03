use std::fmt;

use futures_util::future::BoxFuture;

use crate::{
    access::policy::AccessPolicy,
    core::{Handler, HandlerInput},
    types::{ChatPeerId, ChatUsername, Update, UserPeerId, UserUsername},
};

#[cfg(test)]
mod tests;

/// Allows to protect a handler with an access policy
#[derive(Clone)]
pub struct AccessPredicate<P> {
    policy: P,
}

impl<P> AccessPredicate<P> {
    /// Creates a new AccessPredicate
    ///
    /// # Arguments
    ///
    /// * policy - An access policy
    pub fn new(policy: P) -> Self {
        Self { policy }
    }
}

impl<P> Handler<HandlerInput> for AccessPredicate<P>
where
    P: AccessPolicy + Clone + Sync + 'static,
{
    type Output = Result<bool, P::Error>;
    type Future = BoxFuture<'static, Self::Output>;

    fn handle(&self, input: HandlerInput) -> Self::Future {
        let policy = self.policy.clone();
        Box::pin(async move {
            let debug_principal = DebugPrincipal::from(&input.update);
            let value = policy.is_granted(input).await;
            match value {
                Ok(value) => {
                    log::info!(
                        "Access for {:?} is {}",
                        debug_principal,
                        if value { "granted" } else { "forbidden" }
                    );
                    Ok(value)
                }
                Err(err) => Err(err),
            }
        })
    }
}

struct DebugPrincipal {
    user_id: Option<UserPeerId>,
    user_username: Option<UserUsername>,
    chat_id: Option<ChatPeerId>,
    chat_username: Option<ChatUsername>,
}

impl From<&Update> for DebugPrincipal {
    fn from(update: &Update) -> Self {
        DebugPrincipal {
            user_id: update.get_user_id(),
            user_username: update.get_user_username().cloned(),
            chat_id: update.get_chat_id(),
            chat_username: update.get_chat_username().cloned(),
        }
    }
}

impl fmt::Debug for DebugPrincipal {
    fn fmt(&self, out: &mut fmt::Formatter) -> fmt::Result {
        let mut debug_struct = out.debug_struct("Principal");
        macro_rules! debug_field {
            ($field_name:ident) => {
                if let Some(ref $field_name) = self.$field_name {
                    debug_struct.field(stringify!($field_name), &$field_name);
                }
            };
        }
        debug_field!(user_id);
        debug_field!(user_username);
        debug_field!(chat_id);
        debug_field!(chat_username);
        debug_struct.finish()
    }
}
