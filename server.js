const express = require('express')
const bodyParser = require('body-parser')

let Project = require('./api/models/projectModel')
let apiRoutes = require('./api/routes/acervoRoutes')
let userRoutes = require('./api/routes/userRoutes')
let firebase = require('./api/config/firebase')
let db = require('./db')

firebase()
db()

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });  
app.use(bodyParser.json())
app.use('/api', apiRoutes)
app.use('/api/user', userRoutes)

let port = process.env.PORT || 4200

app.listen(port)

console.log('API started on: ' + port)
