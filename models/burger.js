const orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res);
        });
       // console.log(res);
    },

    createOne: function (cols, vals, cb) {
        orm.createOne("burger", cols, vals, function (res) {
            cb(res);
        });
    },

    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burger", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;