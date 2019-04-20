var mongoose = require('mongoose')
let credentials = require('./dbCredentials')

module.exports = () => mongoose.connect(`mongodb://${credentials.username}:${credentials.password}@ds145146.mlab.com:45146/acervoarquitetura`, { useNewUrlParser: true })