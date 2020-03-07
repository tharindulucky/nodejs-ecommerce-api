'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'published'
    },
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};
