const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const managerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  projectsId: {
    type: Array,
    required: false
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

managerSchema.methods.encryptpassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

managerSchema.methods.matchpassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = model('manager', managerSchema);
