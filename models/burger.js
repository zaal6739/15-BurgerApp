var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(bName, cb) {
        orm.create("burgers", [
          "burger_name", "devoured"
        ], [
          bName, false
        ], cb);
      },
      update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("burgers", {
          devoured: true
        }, condition, cb);
      }
    };
  

  module.exports = burger;
  