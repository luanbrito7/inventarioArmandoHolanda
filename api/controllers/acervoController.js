const mongoose = require('mongoose')
let Project = require('../models/projectModel')
let User = require('../models/userModel')

let middleware = {}

middleware.getAcervo = (req, res) => {
    Project.find({}, (err, listOfProjects) => {
        if (err) {
            return false
        }
        return listOfProjects
    })
}

middleware.getProject = (req, res) => {
    Project.findOne({ name: req.body.project.name }, (err, foundProject) => {
        if (err) {
            return false
        }
        return foundProject
    })
}

middleware.deleteProject = (req, res) => {
    Project.findOneAndDelete({ _id: req.body.project._id }, (err, deletedProject) => {
        if (err) {
            return false
        }
        return deletedProject._id
    })
}

middleware.updateProject = (req, res) => {
    Project.findOneAndUpdate({ _id: req.body.project._id }, req.body.project, (err, updatedProject) => {
        if (err) {
            return false
        }
        return updatedProject._id
    })
}

middleware.createProject = (req, res) => {
    checkModel(res.body.project).then((result) => {
        if (result) {
            Project.create(res.body.project, (err, newProject) => {
                if (err) {
                    return false
                }
            })
        } else {
            return false
        }
    })
}

middleware.isLoggedIn = (req, res) => {
    //checkToken
}

middleware.isAdmin = (req, res) => {
    //getUser and check admin attribute
}

module.exports = middleware