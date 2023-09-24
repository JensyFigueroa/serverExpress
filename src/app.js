const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')
const routesPets = require('./routes/getRoutesPets.js')
require('./db.js')
const server = express()

//parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({extended:false}))
//parse application/json
server.use(bodyParser.json())


//Motor de plantillas EJS - para web dinamicas
server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')

//Para web static
server.use(express.static(__dirname + '/public'))


// server.get('/',(req, res) => {
// //   res.send('server started')
//     res.render('index', {title:'Home'}) //Titlutlo dinamico
// })

// server.get('/service', (req, res) => {
// //   res.send('Page service')
//     res.render('service', {title: 'Service'}) //Titlutlo dinamico
// })

server.use(routes);
// server.use('/pets', routesPets);

server.use((req, res, next) => {
    res.status(404).render('404', {title:'404', description:'Page Not found'})
})

module.exports = server