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
    // updateOne: function(callback) {
    //     orm.updateOne("burgers", "devoured", "1", "burger_name", "New Bacon-ings Burger", function(res) {
    //         callback(res);
    //     });
    // }
};

module.exports = burger;

// insertOne: function(callback) {
//     orm.insertOne("burgers", "burger_name", "Cado Que Si Burger", function(res) {
//         callback(res);
//     });
// },