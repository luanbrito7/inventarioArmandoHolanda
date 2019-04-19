const mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProjectSchema = new Schema({
  name: {
    type: String,
    required: 'enter the name of the project'
  },
  date: {
    type: Date
  },
  description: {
      type: String,
      required: 'enter a description to the project'
  }
});

module.exports = mongoose.model('Project', ProjectSchema);