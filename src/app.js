const express = require('express')

const server = express()

//Motor de plantillas EJS - para web dinamicas
server.set('view engine', 'ejs')
server.set('views', __dirname + '/views')

//Para web static
server.use(express.static(__dirname + '/public'))


server.get('/',(req, res) => {
//   res.send('server started')
    res.render('index', {title:'Titulo dinamico del index'})
})

server.get('/service', (req, res) => {
//   res.send('Page service')
    res.render('service', {title: 'Titulo dinamico de service'})
}

)

module.exports = server