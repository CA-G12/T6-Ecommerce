require('env2')('.env');
const { Pool } = require('pg');

const {
  NODE_ENV, TEST_DATABESE_URL, DEV_DATABESE_URL, DATABASE_URL,
} = process.env;

let connectionString = '';
let ssl = false;

switch (NODE_ENV) {
  case 'production':
    connectionString = DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case 'development':
    connectionString = DEV_DATABESE_URL;
    break;
  case 'test':
    connectionString = TEST_DATABESE_URL;
    break;
  default:
    throw new Error('The Database URL is invalid!!!');
}

const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
