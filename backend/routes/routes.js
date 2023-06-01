const express = require('express')
const router = express.Router();
const userController = require('../src/user/userController');

router.route('/user/getAll').get(userController.getUserControllerFn);
router.route('/listings/getCountries').post(userController.getCountriesControllerFn);


module.exports = router