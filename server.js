const express = require('express')
const bodyParser = require('body-parser')

let Project = require('./api/models/projectModel')
let apiRoutes = require('./api/routes/acervoRoutes')
let userRoutes = require('./api/routes/userRoutes')
let db = require('./db')

db()

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use('/api', apiRoutes)
app.use('/api/user', userRoutes)

let port = process.env.PORT || 3000

app.listen(port)

console.log('API started on: ' + port)
