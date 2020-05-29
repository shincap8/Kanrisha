const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  managerId: {
    type: String,
    required: true
  },
  deadline: {
    type: String,
    required: true
  },
  tasksId: {
    type: String,
    required: false
  },
  freelancersId: {
    type: String,
    required: false
  },
  status: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('project', projectSchema);
