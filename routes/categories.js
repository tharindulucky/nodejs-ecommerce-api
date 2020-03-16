const express = require('express');
const categoryController = require('../controllers/category.controller');

const router = express.Router();

router.get('/parent-categories', categoryController.getParentCategories);

module.exports = router;
