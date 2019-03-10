//! A Telegram Bot API client library
#![warn(missing_docs)]

#[macro_use]
extern crate derive_more;
#[macro_use]
extern crate failure;

mod api;
mod executor;
mod handler;

/// Methods available in the Bot API
pub mod methods;

/// Types available in the Bot API
pub mod types;

pub use self::{
    api::{Api, ApiFuture},
    handler::{
        handle_updates, UpdateHandler, UpdateMethod, UpdatesStream, WebhookService, WebhookServiceFactory,
        WebhookServiceFactoryError,
    },
};
