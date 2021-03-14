const path = require("path")
const DBMigrate = require("db-migrate")
const { dbMigrateConfig } = require("../db/config")

const dbMigrate = DBMigrate.getInstance(true, dbMigrateConfig)

const arguments = process.argv.slice(2)

dbMigrate.reset()
  .then(() => dbMigrate.create(arguments[0]))