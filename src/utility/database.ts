import {Sequelize} from 'sequelize';

const database = process.env.POSTGRES_NAME;
const username = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const host = process.env.POSTGRES_HOST;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('authentication successful!');
  } catch (e) {
    console.log('authentication SUCKS');
  }
}

export {sequelize, testConnection};
