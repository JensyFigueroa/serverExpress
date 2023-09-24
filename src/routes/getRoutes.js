const {Router} = require('express');

const {getHome, getService } = require('../controllers/getControllers.js')
const getRouter = Router();

getRouter.get('/', getHome)
getRouter.get('/service', getService)

module.exports = getRouter;