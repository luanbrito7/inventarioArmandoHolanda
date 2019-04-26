const user = require('../controllers/userController')
const express = require('express')

const router = express.Router({mergeParams:true})

router.post('/login', (req, res) => {
    console.log(req.body)
    return res.send(req.body).status(200)
})

router.post('/register', (req, res) => {
    console.log(req.body)
    let createdUser = acervo.createUser(req.body)
    return res.send(createdUser).status(200)
})

router.get('/', (req, res) => {
    return res.send('hey').status(200)
})
module.exports = router