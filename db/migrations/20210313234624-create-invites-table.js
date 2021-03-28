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
  db.createTable("invites", {
    id: {
      type: "uuid",
      primaryKey: true,
      notNull: true,
      defaultValue: new String('uuid_generate_v4()')
    },
    is_accepted: {
      type: "boolean",
      notNull: true,
      defaultValue: false
    },
    token: {
      type: "string",
      notNull: true,
      unique: true
    },
    sender_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "invites_sender_id_fk",
        table: "users",
        mapping: "id",
        rules: {}
      },
    },
    invitee_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "invites_invitee_id_fk",
        table: "users",
        mapping: "id",
        rules: {}
      }
    },
    island_id: {
      type: "uuid",
      notNull: true,
      foreignKey: {
        name: "invites_island_id_fk",
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
  db.dropTable("invites", callback)
};

exports._meta = {
  "version": 1
};
