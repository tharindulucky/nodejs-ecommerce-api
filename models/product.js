'use strict';
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending'
    },
    parent_category: DataTypes.STRING,
    sub_category: DataTypes.STRING,
    keywords: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    userId: DataTypes.INTEGER,
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(models.Image, {foreignKey: 'productId', onDelete: 'CASCADE', hooks:true});
    Product.belongsTo(models.Category, {as: 'parentCategory', foreignKey: 'parent_category' });
    Product.belongsTo(models.Category, {as: 'subCategory', foreignKey: 'sub_category' });
    Product.belongsTo(models.User, { targetKey: "id", foreignKey: "userId" });
  };
  return Product;
};
