const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/home.controller');

router.get('/', HomeController.index); 

module.exports = router;