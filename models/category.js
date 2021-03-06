'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    parentId: DataTypes.INTEGER,
    icon: {
      type:DataTypes.STRING,
      allowNull:true
    }
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Category, {foreignKey: 'parentId'});
  };
  return Category;
};
