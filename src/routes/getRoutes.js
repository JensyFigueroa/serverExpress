const {Router} = require('express');

const {getHome, getService } = require('../controllers/getControllers.js')

const getRoutes = Router();

getRoutes.get('/', getHome)

getRoutes.get('/service', getService)


module.exports = getRoutes;