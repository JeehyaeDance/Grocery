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
  db.createTable("users", {
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
    email: { 
      type: "string", 
      notNull: true, 
      unique: true 
    },
    hashed_password: { 
      type: "string", 
      notNull: true 
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
  db.dropTable("users", callback)
};

exports._meta = {
  "version": 1
};
