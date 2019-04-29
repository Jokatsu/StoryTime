const db = require('../models');
const jwt = require('jsonwebtoken');

function cookieCheck(){
  console.log('hit cookie check function');
}

function signup(req, res){
  db.User.create(req.body).then(result => {
      jwt.sign(user)
    console.log(user);
  }).catch(err => {
    if (err) throw err;s
  })
}

function login(){
  console.log('hit login function');
}

function logout(){
  console.log('hit logout function');
}

module.exports = {
  cookieCheck, 
  signup,
  login,
  logout
}