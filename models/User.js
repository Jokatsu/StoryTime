require('dotenv').config();
var bcrypt = require('bcrypt');
var { SALT_ROUNDS } = process.env;

module.exports = function (sequelize, {STRING}) {
  var User = sequelize.define("User", { 
    username: { type: STRING, allowNull: false, unique: true }, 
    email: { type: STRING, allowNull: false, unique: true }, 
    password: { type: STRING, allowNull: false, unique: true }
  }, { timestamps: false });
  User.beforeCreate(user => bcrypt.hash(user.password, parseInt(SALT_ROUNDS))
      .then(hash => user.password = hash)
      .catch(err => console.log(err)));
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  return User;
};