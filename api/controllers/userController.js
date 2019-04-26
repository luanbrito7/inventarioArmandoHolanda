const mongoose = require('mongoose')
let User = require('../models/userModel')

let middleware = {}

middleware.getUser = (username) => {
    Project.findOne({ username }, (err, foundUser) => {
        if (err) return err
        else return (['User was found', foundUser])
    })
}

middleware.createUser = (user) => {
    let newUser = new User({
        name: user.name,
        username: user.username,
        password: user.password,
        isAdmin: true
    })
    console.log(newUser)
    newUser.save(newUser, (err, user) => {
        console.log([err, user])
        if (err) return err
        else return user
    })
}

middleware.isLoggedIn = (req, res) => {
    //checkToken
}

middleware.isAdmin = (req, res) => {
    //getUser and check admin attribute
}

module.exports = middleware