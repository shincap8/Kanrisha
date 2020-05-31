const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Project = require('../models/projects');
const Freelancer = require('../models/freelancer');

router.post('/new-task', async (req, res) => {
  const {
    name,
    description,
    projectId,
    freelancersId,
    commentsId
  } = req.body;
  const newTask = new Task({
    name,
    description,
    projectId,
    freelancersId,
    commentsId
  });
  await newTask.save();
  console.log(newTask);
  const project = await Project.findById(projectId);
  project.tasksId.push(newTask._id);
  // project.save();
  if (freelancersId) {
    const castfreelancerId = Object.values(freelancersId);
    for (let i = 0; i < castfreelancerId.length; i++) {
      const freelancer = await Freelancer.findById(freelancersId[i]);
      freelancer.tasksId.push(newTask._id);
      freelancer.save();
      project.freelancersId.push(castfreelancerId[i]);
    }
    project.save();
  }
  res.send('true');
});

module.exports = router;
