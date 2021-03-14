const DBMigrate = require("db-migrate")
const { dbMigrateConfig } = require("../../db/config")


function runMigrations() {
  const dbMigrate = DBMigrate.getInstance(true, dbMigrateConfig)
  console.log("starting migrations")
  dbMigrate.up().then(() => {
    console.log("successfully ran all migrations, exiting...")
    return
  })
}

module.exports = {
  runMigrations
}