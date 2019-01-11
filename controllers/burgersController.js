var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

//get routes
router.get("/", function(req, res) {
  res.redirect("/burgers");
}); 

router.get("/burgers", function(req, res) {

  burger.all(function(burgerData) {
  
    res.render("index", { burger_data: burgerData });
  });
});

// put route
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {

    res.sendStatus(200);
  });
});

// post route
router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {

    res.redirect("/");

  });
});

module.exports = router;
