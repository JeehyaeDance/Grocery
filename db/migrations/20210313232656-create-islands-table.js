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
  db.createTable("islands", {
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
    owner_id: { 
      type: "uuid", 
      notNull: true, 
      foreignKey: { 
        name: "island_owner_id_fk", 
        table: "users", 
        rules: {
          onDelete: "CASCADE",
        },
        mapping: "id"
      } 
    },
  }, callback)
};

exports.down = function(db, callback) {
  db.dropTable("islands", callback)
};

exports._meta = {
  "version": 1
};
