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
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  taskId: {
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

freelancerSchema.methods.encryptpassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

freelancerSchema.matchpassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('freelancer', freelancerSchema);
