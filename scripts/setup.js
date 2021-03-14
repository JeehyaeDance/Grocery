const dotenv = require("dotenv")
const { dropAndCreateDb } = require('./actions/drop-and-create-db')
const { runMigrations } = require('./actions/run-migrations')

dotenv.config()

async function script() {
  const arguments = process.argv.slice(2)
  
  if (arguments.includes("--force")) {
    await dropAndCreateDb()
    // ignore warnings about uuid, the only reason
    // they appear is that they are not "natively" supported
    // in the migration library
    await runMigrations()
  }
}

script()
