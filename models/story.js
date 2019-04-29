module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    text: DataTypes.STRING
  });
  return Story;
};
