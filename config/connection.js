var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"127.0.0.1",
    port = 8000,
    user = "root",
    password = "root",
    database = "burgers_db"
});

connection.connect(function(error){
    if(error) {
        console.log('error '+error.stack)
        return;
    }
    console.log("connection id: " +connection.threadId);
    });

module.exports = connection;