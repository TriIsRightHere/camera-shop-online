

const express = require('express');
const router = express.Router();
const camerasController = require('../app/controllers/CamerasController');


router.get('/:slug', camerasController.show);


module.exports = router;
