const db = require('../models');
const {createToken} = require('./../utilities/tokenService');

function signup(req, res){
  db.User.create(req.body).then(user => {
    let token = createToken(user);
    res.cookie('token', token, {
      httpOnly: true, // only accessible from same origin
      // secure: true, // only accessible over https, this will be commented back in for when its deployed
      maxAge: 1000 * 60 * 60, // one hour cookie age,
      signed: true 
    });
    res.redirect('/');
  }).catch(err => {
    if (err) throw err;s
  })
}

function login({body: {username, password}}, res){
  db.User.findOne({ where: { username } }).then(function (user) {
    console.log(user);
    if (!user) {
        res.redirect('/login');
    } else if (!user.validPassword(password)) {
        res.redirect('/login');
    } else {
      let token = createToken(user);
      res.cookie('token', token, {
        httpOnly: true, // only accessible from same origin
        // secure: true, // only accessible over https, this will be commented back in for when its deployed
        maxAge: 1000 * 60 * 60, // one hour cookie age,
        signed: true 
      });
      res.redirect('/');
    }
});
}

function logout(req,res){
  res.clearCookie('token');
  res.redirect('/');
}

module.exports = {
  signup,
  login,
  logout
}