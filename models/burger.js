const orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.select("burger", function (res) {
            cb(res);
        });
    },

    insertOne: function (cols, vals, cb) {
        orm.insert("burger", cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function (res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.delete("burger", condition, function(res) {
          cb(res);
        });
      }
}

module.exports = burger;