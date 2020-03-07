'use strict';
module.exports = (sequelize, DataTypes) => {

  const Cart = sequelize.define('Cart', {
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(models.Product, { targetKey: "id", foreignKey: "productId" });
  };
  return Cart;
};
