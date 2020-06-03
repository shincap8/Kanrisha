const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Project = require('../models/projects');
const Freelancer = require('../models/freelancer');
const Advance = require('../models/advance_measure');

router.post('/new-task', async (req, res) => {
  const {
    name,
    description,
    projectId,
    commentsId,
    freelancer,
    weight,
    tasktype,
    deadline
  } = req.body;
  const newTask = new Task({
    name,
    description,
    projectId,
    commentsId,
    freelancer,
    weight,
    tasktype,
    deadline
  });
  await newTask.save();
  console.log(newTask);
  const project = await Project.findById(projectId);
  if (project) {
    project.tasksId = newTask._id;
    project.save();
  } else {
    res.send(false);
  }
  res.send(true);
});

router.post('/tasks/addfreelancers', async (req, res) => {
  const {
    taskId,
    freelancerids,
    projectid
  } = req.body;
  const project = await Project.findById(projectid);
  for (let i = 0; i < freelancerids.length; i++) {
    const freelancer = await Freelancer.findById(freelancerids[i]);
    freelancer.tasksId.push(taskId);
    project.freelancersId.push(freelancerids[i]);
    const advance = Advance({
      freelancerId: freelancerids[i],
      taskid: taskId,
      advanced: 40
    });
    advance.save();
    freelancer.advancedIds.push(advance._id);
    project.advancedIds.push(advance._id);
    freelancer.save();
    project.save();
  }
  res.send(true);
});

router.post('/tasks/deletefreelancers', async (req, res) => {
  const {
    taskId,
    freelancerids
  } = req.body;
  for (let i = 0; i < freelancerids.length; i++) {
    const freelancer = await Freelancer.findById(freelancerids[i]);
    const index = freelancer.tasksId.indexOf(taskId);
    freelancer.tasksId.splice(index, 1);
    freelancer.save();
  }
  res.send(true);
});

module.exports = router;
