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
    required: true
  },
  commentsId: {
    type: Array,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  tasktype: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  advancesId: {
    type: Array,
    required: true
  },
  deadline: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('task', taskSchema);
