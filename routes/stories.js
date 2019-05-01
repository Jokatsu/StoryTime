var router = require("express").Router();
var {getAll, getOne, removeOne, newStory, updateStory, authorized} = require("./../controllers/stories");

  router.use(authorized);

  router.get("/", getAll);

  router.get("/:id", getOne);

  router.delete("/:id", removeOne);

  router.post("/create", newStory);

  router.put("/story/update", updateStory);

  module.exports = router;
