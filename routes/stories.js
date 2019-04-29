const router = require('express').Router();
const {getAll, getOne, deleteOne} = require('./../controllers/stories');

  router.get("/", getAll);
  
  router.get("/:id", getOne);

  router.delete("/:id", deleteOne);

  module.exports = router;
