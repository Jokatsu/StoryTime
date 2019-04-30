const { validToken } = require('./../utilities/tokenService');
const db = require('../models');

module.exports = function (app) {
  app.get("/", ({ signedCookies: { token } }, res) => {
    if (token) {
      validToken(token).then(({ user: { id, username } }) => {
        db.User.findOne({ where: { username, id } }).then(({ username }) => {
          return res.render("index", { user: { username } });
        }).catch(err => {
          if (err) throw err;
        })
      }).catch(err => {
        if (err) throw err;
      })
    } else {
      res.render("login", { msg: "Story Time!" })
    }
  });

  /////////////////////////////////////////////////////////////

  app.get("/create/story", ({ signedCookies: { token } }, res) => {
    if (token) {
      validToken(token).then(({ user: { id, username } }) => {
        db.User.findOne({ where: { username, id } }).then(({ username }) => {
          return res.render("story", { user: { username } });
        }).catch(err => {
          if (err) throw err;
        })
      }).catch(err => {
        if (err) throw err;
      })
    } else {
      res.render("login")
    }
  });


  app.get('/login', (req, res) => res.render('login'));

  app.get('/signup', (req, res) => res.render('signup'));
};
