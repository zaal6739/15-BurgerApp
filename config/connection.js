var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 8000,
  user: "root",
  password: "root",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error" + err.stack);
    return;
  }
  console.log("id number " + connection.threadId);
});

module.exports = connection;
