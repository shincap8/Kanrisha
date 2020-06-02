const Freelancer = require('../models/freelancer');
// const mongoose = require('mongoose');

module.exports.calculateAdvance = async function (tasksId) {
  const frelancer = await Freelancer.find({ tasksId });
  console.log(frelancer);
  return (0);
};
