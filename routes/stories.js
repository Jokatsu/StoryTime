var router = require("express").Router();
var controller = require("./../controllers/stories");

  router.get("/", controller.getAll);

  router.delete("/:id", controller.delete);

  router.post("/story/create", controller.newStory);

  router.put("/story/update", controller.updateStory);

  module.exports = router;
