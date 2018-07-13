var connection = require("../config/connection");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    };
    return arr.toString();
};
  
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
var arr = [];

// loop through the keys and push the key/value as a string int arr
for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
    // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
    };
    // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
    // e.g. {sleepy: true} => ["sleepy=true"]
    arr.push(key + "=" + value);
    };
};

// translate array of strings to a single comma-separated string
return arr.toString();
};

var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err
            callback(result);
        });
    },
    insertOne: function(tableInput, whatToSelect, newBurger, callback) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (";
        queryString += whatToSelect;
        queryString += ") "
        queryString += "VALUES ('";
        queryString += newBurger;
        queryString += "') "
        console.log(queryString);
        connection.query(queryString, newBurger, function(err, result) {
            if (err) throw err;
            callback(result);
        });
    },
    // updateOne: function(tableInput, whatToSet, newValue, whatToSelect, criteria, callback) {
    //     var queryString = "UPDATE " + tableInput + " SET " + whatToSet + " = '" + newValue + "' WHERE " + whatToSelect + " = '" + criteria + "';" 
    //     console.log(queryString);
    //     connection.query(queryString, [tableInput, whatToSet, newValue, whatToSelect, criteria], function(err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     });
    // }
};

module.exports = orm;