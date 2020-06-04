const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  taskId: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  idowner: {
    type: String,
    required: true
  },
  profiletype: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('comments', commentSchema);
