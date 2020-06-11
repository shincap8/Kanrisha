const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  freelancerId: {
    type: Object,
    required: true
  },
  taskid: {
    type: Object,
    required: true
  },
  localadvanced: {
    type: Number,
    required: true
  },
  toprojectadvanced: {
    type: Number,
    required: true
  },
  localamount: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
});

module.exports = model('advance', projectSchema);
