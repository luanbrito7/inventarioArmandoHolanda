const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

let Project = require('./api/models/projectModel')

const app = express()

let port = process.env.PORT || 3000

app.listen(port)

console.log('API started on: ' + port)
