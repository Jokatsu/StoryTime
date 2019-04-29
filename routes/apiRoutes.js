// var db = require("../models");

module.exports = function(app) {
  app.get("/:id", function(req, res) {
    db.Story.findAll({}).then(function(dbStory) {
      res.json(dbStory);
    });
  });
  app.post("/api/stories", function(req, res) {
    db.Story.update(
      { text: req.body.input },
      {
        where: { id: req.body.id }
      }
    ).then(function(dbStory) {
      res.json(dbStory);
    });
  });
};
