const acervo = require('../controllers/acervoController')
const express = require('express')
const storage = require('../firebase/upload')

const router = express.Router({mergeParams:true})

    // router.post('/', (req, res) => {
    //   console.log(req.body)
    //   return res.send('hello world').status(200)
    // })

    router.get('/', (req, res) => {
      let projectList = acervo.getAcervo(req)
      projectList ? res.send(projectList).status(200) : null
    })

    router.get('/:projectId', (req, res) => {
      let foundProject = acervo.getProject(req.body)
      foundProject ? res.send(foundProject).status(200) : null
    })

    router.post('/:projectId/edit', (req, res) => {
      let editedProject = acervo.updateProject(req.body)
      editedProject ? res.send(editedProject).status(200) : null
    })

    router.post('/:projectId/delete', (req, res) => {
      let deletedProject = acervo.deleteProject(req.body)
      deletedProject ? req.send(deletedProject).status(200) : null
    })

    router.post('/create', multer.single('file'), (req, res) => {
      let file = req.file
      let project = req.body
      if (!!file) {
        storage.upload(file.buffer, file.mimetype, file.filename)
          .then(res => {
            project.image = res.url
            acervo.createProject(project) 
          })
      }
    })

    module.exports = router