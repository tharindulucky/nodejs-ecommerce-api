'use strict';
module.exports = (sequelize, DataTypes) => {

  const ProductsOrder = sequelize.define('ProductsOrder', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  ProductsOrder.associate = function(models) {
    ProductsOrder.belongsTo(models.Order, { targetKey: "id", foreignKey: "orderId" });
    ProductsOrder.belongsTo(models.Product, { targetKey: "id", foreignKey: "productId" });
  };
  return ProductsOrder;
};
