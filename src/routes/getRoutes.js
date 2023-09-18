const {Router} = require('express');

const {getHome, getService, getPets } = require('../controllers/getControllers.js')

const getRoutes = Router();

getRoutes.get('/', getHome)
getRoutes.get('/service', getService)
getRoutes.get('/pets', getPets)


module.exports = getRoutes;