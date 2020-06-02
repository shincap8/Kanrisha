const Freelancer = require('../models/freelancer');

module.exports.calculateAdvance = async function (tasksId) {
  console.log(typeof (tasksId));
  const frelancer = await Freelancer.findOne(tasksId);
  console.log(frelancer);
  return (0);
};
