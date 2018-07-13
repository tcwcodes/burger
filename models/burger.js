var orm = require("../config/orm");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(newBurger, callback) {
        orm.insertOne("burgers", "burger_name", newBurger, function(res) {
            callback(res);
        });
    },
    updateOne: function(newValue, whatToSelect, callback) {
        orm.updateOne("burgers", "devoured", newValue, whatToSelect, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;