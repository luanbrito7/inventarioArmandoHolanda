const mongoose = require('mongoose');
const Project = require('./projectModel')
const User = require('./userModel')
var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'enter the name of the project'
  },
  projects: {
      type: [Project]
  },
  admin: {
      type: [User]
  }
});

module.exports = mongoose.model('Project', ProjectSchema);