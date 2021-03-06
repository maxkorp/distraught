/* @flow */
import assertEnvironment from 'assert-env';
import chalk from 'chalk';

const REQUIRED_ENV = [
  'NODE_PATH', 'NODE_ENV', 'DATABASE_URL', 'APP_NAME', 'AMQP_URL',
  'SENDGRID_API_KEY', 'SENDGRID_DEV_EMAIL', 'CRYPTO_ALGO', 'CRYPTO_KEY',
];

export class GenericServer {
  options: any = {};

  constructor(options: any) {
    this.options = options;
    this.assertEnv();
  }

  assertEnv() {
    // Distraught Specific Required Environment Variables
    try {
      assertEnvironment(REQUIRED_ENV);
    } catch (err) {
      console.log(chalk.red.bold(err.message.substr(0, err.message.length - 1))); // eslint-disable-line
      process.exit(1);
    }

    if (! (this.options.requiredEnv && this.options.requiredEnv.length)) {
      return;
    }

    // APP Specific
    try {
      assertEnvironment(this.options.requiredEnv);
    } catch (err) {
      console.log(chalk.red.bold(err.message.substr(0, err.message.length - 1))); // eslint-disable-line
      process.exit(1);
    }
  }
}
