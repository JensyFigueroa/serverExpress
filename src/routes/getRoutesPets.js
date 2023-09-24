const {Router} = require('express');

const {getPets, getCreate  } = require('../controllers/getControllers.js')
const {postCreate} = require('../controllers/postController.js')
const getRouter = Router();


getRouter.get('/', getPets)
getRouter.get('/create', getCreate)
getRouter.post('/', postCreate)

module.exports = getRouter;
