var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "94.191.78.55",
  user: "roots",
  password: "root",
  database: "1611B"
});
connection.connect();
module.exports = connection;
