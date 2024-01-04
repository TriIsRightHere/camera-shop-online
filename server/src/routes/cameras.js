

const express = require('express');
const router = express.Router();
const camerasController = require('../controllers/CamerasController');


router.get('/:create', camerasController.create);
router.post('/:store', camerasController.store);
router.get('/:slug', camerasController.show);

module.exports = router;
