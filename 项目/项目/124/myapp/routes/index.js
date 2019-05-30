var express = require("express");
var router = express.Router();
var mysql = require("mysql");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/users", function(req, res, next) {
  // var connection = mysql.createConnection({
  //   host: "94.191.78.55",
  //   user: "roots",
  //   password: "root"
  // });

  // connection.connect(function(err) {
  //   if (err) {
  //     console.error("error connecting: " + err.stack);
  //     return;
  //   }
  //   console.log("connected as id " + connection.threadId);
  // });
});
module.exports = router;
