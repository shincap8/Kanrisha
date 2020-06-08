const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const freelancerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  projectsId: {
    type: Array,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  tasksId: {
    type: Array,
    required: true
  },
  commentsId: {
    type: Array,
    required: true
  },
  advancedIds: {
    type: Array,
    required: true
  },
  profession: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

freelancerSchema.methods.encryptpassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

freelancerSchema.methods.matchpassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('freelancer', freelancerSchema);
