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
    type: Array,
    required: true
  },
  freelancersId: {
    type: Array,
    required: false
  },
  commentsId: {
    type: Array,
    required: false
  }
}, {
  timestamps: true
});

module.exports = model('task', taskSchema);
