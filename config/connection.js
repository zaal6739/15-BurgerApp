var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({  
  host: "127.0.0.1",
  port: 8000,
  user: "root",
  password: "root",
  database: "burgers_db"});
  };


connection.connect(function(err) {
  if (err) {
    console.error("error" + err.stack);
    return;
  }
  console.log("id number " + connection.threadId);
});

module.exports = connection;
