module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/create/story", function(req, res) {
    res.render("story");
  });
};
