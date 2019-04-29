var db = require("../models");

module.exports = function(app) {
  app.get("api/stories", function(req, res) {
    var query = {};
    if (req.params.genre_id) {
      query.genreId = req.params.genre_id;
    }
    db.Story.findAll({
      where: query
    }).then(function(dbStory) {
      res.json(dbStory);
    });
  });
  app.get("api/stories/:id", function(req, res) {
    db.Story.findOne({
      where: req.params
    }).then(function(dbStory) {
      res.json(dbStory);
    });
  });
  app.delete("api/stories/:id", function(req, res) {
    db.Story.destroy({
      where: req.params
    }).then(function(dbStory) {
      res.json(dbStory);
    });
  });
};
