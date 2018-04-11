var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
/* DELETE users. */
router.post("/forms-:id", function(req, res, next) {
  console.log(req.body.id); // retourne Bob
});
/* Route coucou. */
router.get("/coucou-pug", function(req, res, next) {
  res.render("coucou-pug", { sayHello: "Hello buddy" });
});

module.exports = router;
