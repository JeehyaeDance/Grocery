const path = require("path")

// https://db-migrate.readthedocs.io/en/latest/Getting%20Started/installation/
const dbMigrateConfig = {
  cmdOptions: {
    "migrations-dir": path.resolve(__dirname + "/migrations")
  }
}

module.exports = {
  dbMigrateConfig
}