const { validToken } = require('./../utilities/tokenService');
const db = require('../models');





module.exports = function (app) {
  app.get("/", ({ signedCookies: { token } }, res) => {

    if (token) {


      validToken(token).then(async ({ user: { id, username } }) => {
        var stories = await db.Story.findAll({include: [db.User]});

        db.User.findOne({ where: { username, id } }).then(({ username }) => {
          return res.render("index", {
            user: { username },
            stories
          });
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

  app.get("/view", (req , res) => {
      token= req.signedCookies.token; 
    if (token) {


      validToken(token).then(async ({ user: { id, username } }) => {
        var storyArr = await db.Story.findOne({include: [db.User]});
      
        db.User.findOne({ where: { username, id } }).then(({ username }) => {
          return res.render("view", {
            user: { username },
            stories: storyArr
          });
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


  app.get('/login', (req, res) => res.render('login'));

  app.get('/signup', (req, res) => res.render('signup'));
};



