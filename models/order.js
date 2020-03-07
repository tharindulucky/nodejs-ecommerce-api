'use strict';
module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending'
    },
  }, {});
  Order.associate = function(models) {
    Order.hasMany(models.ProductsOrder);
  };
  return Order;
};
