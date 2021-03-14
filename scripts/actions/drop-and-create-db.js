const pgtools = require("pgtools")

function errorHandler(errorMessage) {
  const ERRORS = {
    DB_DOES_NOT_EXIST: `Attempted to drop a database that does not exist`,
    DB_CONNECTION_USED: `Attempted to drop a database that is being accessed by other users`
  }

  if (errorMessage.includes(ERRORS.DB_DOES_NOT_EXIST)) {
    console.info(`Db does not exist, skipping.`)
  } else if (errorMessage.includes(ERRORS.DB_CONNECTION_USED)) {
    console.info(`Db connection is being used. Please make sure you have closed all connections via terminal or servers.`)
    process.exit(-1)
  } else {
    console.error(errorMessage)
    process.exit(-1)
  }
}

async function dropAndCreateDb() {
  console.log("starting drop and create script")
  const config = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT
  }

  const dbName = process.env.POSTGRES_NAME

  try {
    console.log("dropping database...")
    await pgtools.dropdb(config, dbName)
    console.log(`dropped db: ${dbName}`)
  } catch (e) {
    errorHandler(e.message)
  }

  try {
    console.log("creating database...")
    await pgtools.createdb(config, dbName)
    console.log(`created db: ${dbName}`)
  } catch (e) {
    errorHandler(e.message)
  }
}

module.exports = {
  dropAndCreateDb
}