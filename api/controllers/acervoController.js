const mongoose = require('mongoose')
let Acervo = mongoose.model('Project')

let middleware = {}

middleware.getAcervo = (req, res) => {
    Acervo.find({}, (err, listOfProjects) => {
        if (err) {
            return err
        }
        return listOfProjects
    })
}

middleware.getProject = (req, res) => {
    Acervo.findOne({ name: req.body.project.name }, (err, foundProject) => {
        if (err) {
            return err
        }
        return foundProject
    })
}

middleware.deleteProject = (req, res) => {
    Acervo.findOneAndDelete({ _id: req.body.project._id }, (err, deletedProject) => {
        if (err) {
            return err
        }
        return deletedProject._id
    })
}

middleware.updateProject = (req, res) => {
    Acervo.findOneAndUpdate({ _id: req.body.project._id }, req.body.project, (err, updatedProject) => {
        if (err) {
            return err
        }
        return updatedProject._id
    })
}

middleware.createProject = (req, res) => {
    checkModel(res.body.project).then((result) => {
        if (result) {
            Acervo.create(res.body.project, (err, newProject) => {
                if (err) {
                    return err
                }
                return newProject
            })
        } else {
            return 'error: bad format'
        }
    })
}