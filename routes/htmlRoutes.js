module.exports = function (app) {
  app.get("/", (req, res) => res.render("index", { msg: "Story Time!" }));

  app.get('/login', (req, res) => res.render('login'));
  
  app.get('/signup', (req, res) => res.render('signup'));``

};
