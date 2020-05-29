const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectId: {
    type: String,
    required: true
  },
  freelancersId: {
    type: String,
    required: false
  },
  commentsId: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});

module.exports = model('task', taskSchema);
