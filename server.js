const express = require('express')
const app = express()
let port = process.env.PORT || 3000

app.listen(port)

console.log('API started on: ' + port)
