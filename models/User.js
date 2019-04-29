require('dotenv').config();
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = process.env;

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", { 
    username: { type: DataTypes.STRING, allowNull: false, unique: true }, 
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, 
    password: { type: DataTypes.STRING, allowNull: false, unique: true }
  }, { timestamps: false });
  User.beforeCreate(user => bcrypt.hash(user.password, parseInt(SALT_ROUNDS))
      .then(hash => user.password = hash)
      .catch(err => console.log(err)));
  return User;
};