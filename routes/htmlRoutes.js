var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });
  app.get("/addstory", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/story.handlebars"));
  });
  app.post("/")
};
