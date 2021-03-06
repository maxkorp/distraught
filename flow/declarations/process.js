/* @flow */
declare var process: { // eslint-disable-line
  env: {
    AMQP_URL: string,
    APP_NAME: string,
    DATABASE_URL: string,
    DISABLE_JWT_AUTH: string,
    DYNO: string,
    GIT_SHA: string,
    HOST: string,
    KNEX_DEBUG: ?string,
    NODE_ENV: string,
    PORT: string,
    ROLLBAR_TOKEN: string,
    SENDGRID_API_KEY: string,
    SENDGRID_DEV_EMAIL: string,
    SLACK_WEBHOOK_URL: string,
    CRYPTO_KEY?: string,
    CRYPTO_ALGO?: string,
  },
  cwd: Function,
  on: Function,
  exit: Function,
};
