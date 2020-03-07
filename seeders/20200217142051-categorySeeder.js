'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Vehicles',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Real Estate',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Electronics',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sport Items',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Art',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Educational',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animals',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Foods & Agriculture',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fashion',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Home & Garden',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Business Services',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crafts',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cards & Coupons',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cars',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Motorbikes',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buses & Vans',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Threewheelers',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Push Cycles',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Water Transport',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vehical Parts',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Heavy Duty Vehicles',
        parentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Land',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Houses',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Commercial Building',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apartment',
        parentId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobile Phones',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mobile Phone Accessories',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Computer Accessories',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Computers & Tablets',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TVs',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'TV & Video Accessories',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cameras & Camcorders',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Audio & MP3',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other Electronics',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Household Devices',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Software',
        parentId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Sports Equipments',
        parentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Events & Tickets',
        parentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Toys',
        parentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Art & Collectibles',
        parentId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Musical Instruments',
        parentId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Entertainment Materials',
        parentId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tuition',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Eductional Media',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Textbooks',
        parentId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pets',
        parentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Farm Animals',
        parentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animal Accesseries',
        parentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animal Food',
        parentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Animal Medicine',
        parentId:7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Food',
        parentId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Crops, Seeds & Plants',
        parentId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Farming Tools & Machinery',
        parentId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Drinks',
        parentId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Clothing',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Footwear',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jewellery',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sunglasses',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Watches',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wallets',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Beauty Products',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Plants',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pots',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Decorative Items',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Furniture',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Home Appliances',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bathware',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Kitchen Items',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Other',
        parentId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Services',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Office Supplies & Stationary',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Industry Tools & Machinery',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Construction Materials',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Licences & Titles',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Medical Equipments',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other',
        parentId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sewing & Fabric',
        parentId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Glass & Mosaics',
        parentId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Other Crafts',
        parentId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gift Cards',
        parentId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Coupons',
        parentId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vouchers',
        parentId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
