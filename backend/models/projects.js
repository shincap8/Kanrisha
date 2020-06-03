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
    type: Array,
    required: false
  },
  freelancersId: {
    type: Array,
    required: false
  },
  status: {
    type: Boolean,
    required: true
  },
  advanced: {
    type: Number,
    required: true
  },
  advancedIds: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('project', projectSchema);
