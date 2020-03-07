const express = require('express');
const imageController = require('../controllers/image.controller');
imageUpload = require('../helpers/image-uploader');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuth, imageUpload.upload.single('image'), imageController.save);
router.post('/upload', checkAuth, imageUpload.upload.single('image'), imageController.upload);
router.get('/:id', imageController.getImage);
router.delete('/:id', checkAuth, imageController.destroy);

module.exports = router;
