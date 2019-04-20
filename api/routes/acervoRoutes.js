const acervo = require('../controllers/acervoController')
const express = require('express')
const router = express.Router({mergeParams:true})

    router.get('/projects', (req, res) => {
      let projectList = acervo.getAcervo(req)
      projectList ? res.send(projectList).status(200) : null
    })

    router.post('/projects', (req, res) => {
      let newProject = acervo.createProject(req)
      newProject ? res.send(newProject).status(200) : null
    })

    router.get('/projects/:projectId', (req, res) => {
      let foundProject = acervo.getProject(req)
      foundProject ? res.send(foundProject).status(200) : null
    })

    router.post('/projects/:projectId/edit', (req, res) => {
      let editedProject = acervo.updateProject(req)
      editedProject ? res.send(editedProject).status(200) : null
    })

    router.post('/projects/:projectId/delete', (req, res) => {
      let deletedProject = acervo.deleteProject(req)
      deletedProject ? req.send(deletedProject).status(200) : null
    })

    module.exports = router