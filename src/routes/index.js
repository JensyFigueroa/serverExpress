const { Router } = require('express');
// Importar todos los routers;
const getRoutes = require('./getRoutes.js')

const router = Router();

// Configurar los routers

router.use('/', getRoutes)

module.exports = router;