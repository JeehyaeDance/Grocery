'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable("island_users", {
    id: {
      type: "uuid",
      primaryKey: true,
      notNull: true,
      defaultValue: new String('uuid_generate_v4()')
    },
    island_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "island_users_island_id_fk", 
        table: "islands", 
        mapping: "id",
        rules: {}
      }
    },
    user_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "island_users_user_id_fk", 
        table: "users", 
        rules: {
          onDelete: "CASCADE",
        },
        mapping: "id"
      }
    }
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable("island_users", callback)
};

exports._meta = {
  "version": 1
};
