module.exports = function (sequelize, DataTypes) {


  var Story = sequelize.define("Story", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {timestamps: false});
  Story.associate = function (models) {
    Story.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Story;
};
