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
  db.createTable("lists", {
    id: {
      type: "uuid",
      primaryKey: true,
      notNull: true,
      defaultValue: new String('uuid_generate_v4()')
    },
    name: {
      type: "string",
      notNull: true,
      length: 100
    },
    is_private: {
      type: "boolean",
      notNull: true,
      defaultValue: false
    },
    owner_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "lists_owner_id_fk",
        table: "users",
        rules: {
          onDelete: "CASCADE"
        },
        mapping: "id"
      }
    },
    island_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "lists_island_id_fk",
        table: "islands",
        rules: {
          onDelete: "CASCADE"
        },
        mapping: "id"
      }
    },
    created_at: {
      type: "datetime",
      notNull: true
    },
    updated_at: {
      type: "datetime",
      notNull: true
    }
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable("lists", callback)
};

exports._meta = {
  "version": 1
};
