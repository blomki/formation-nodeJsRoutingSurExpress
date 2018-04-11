var express = require("express");
var router = express.Router();

/* GET users. */
router.get("/", function(req, res, next) {
  res.send(`Bienvenue sur la page des users.`);
});
/* PUT users. */
router.put("/:name", function(req, res, next) {
  res.send(`Mise à jour des infos de ${req.params.name}`);
});
/* DELETE users. */
router.delete("/:id", function(req, res, next) {
  res.send(`Hey it's a DELETE ID ${req.params.id}`);
});
/* POST users. */
router.post("/", function(req, res, next) {
  res.send(`Hey it's a DELETE ID ${req.params.id}`);
});

module.exports = router;
