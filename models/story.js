module.exports = function(sequelize, DataTypes) {
  var Story = sequelize.define("Story", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });
  Story.associate = function(models) {
    postMessage.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Story;
};
