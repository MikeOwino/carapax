use crate::policy::AccessPolicy;
use carapax::{async_trait, types::Update, Handler, HandlerResult};

/// Access control handler
///
/// Helps to deny/allow updates from specific user/chat
pub struct AccessHandler<P> {
    policy: P,
}

impl<P> AccessHandler<P> {
    /// Creates a new handler with a specified policy
    pub fn new(policy: P) -> Self {
        AccessHandler { policy }
    }
}

#[async_trait]
impl<C, P> Handler<C> for AccessHandler<P>
where
    C: Send,
    P: AccessPolicy<C> + Send + Sync,
{
    type Input = Update;
    type Output = HandlerResult;

    async fn handle(&mut self, context: &mut C, update: Self::Input) -> Self::Output {
        if self.policy.is_granted(context, &update).await {
            HandlerResult::Continue
        } else {
            HandlerResult::Stop
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::policy::{AccessPolicy, AccessPolicyFuture};

    struct Policy {
        flag: bool,
    }

    impl Policy {
        fn new(flag: bool) -> Self {
            Self { flag }
        }
    }

    impl AccessPolicy for Policy {
        fn is_granted(&self, _context: &mut Context, _update: &Update) -> AccessPolicyFuture {
            self.flag.into()
        }
    }

    #[test]
    fn handler() {
        let mut context = Context::default();
        let update: Update = serde_json::from_value(serde_json::json!(
            {
                "update_id": 1,
                "message": {
                    "message_id": 1,
                    "date": 0,
                    "from": {"id": 1, "is_bot": false, "first_name": "test", "username": "username1"},
                    "chat": {"id": 1, "type": "private", "first_name": "test", "username": "username1"},
                    "text": "test middleware"
                }
            }
        ))
        .unwrap();

        let policy = Policy::new(true);
        let handler = AccessHandler::new(policy);
        let result = handler.handle(&mut context, update.clone()).wait().unwrap();
        assert_eq!(result, HandlerResult::Continue);

        let policy = Policy::new(false);
        let handler = AccessHandler::new(policy);
        let result = handler.handle(&mut context, update).wait().unwrap();
        assert_eq!(result, HandlerResult::Stop);
    }
}
