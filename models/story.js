module.exports = function (sequelize, DataTypes) {
  var title = text = genre = DataTypes.STRING,
    timestamps = false;
  var Story = sequelize.define("Story", { title, genre, text }, { timestamps });
  Story.sync();
  return Story;
};
