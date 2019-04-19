module.exports = function(app) {
    const acervo = require('../controllers/acervoController')
  
    // acervo Routes
    app.route('/projects')
      .get(acervo.getProjects)
      .post(acervo.createProject);
  
  
    app.route('/projects/:projectId')
      .get(acervo.getProject)
      .put(acervo.updateProject)
      .delete(acervo.deleteProject);
  };