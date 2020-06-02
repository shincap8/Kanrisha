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
    commentsId,
    weight,
    tasktype
  } = req.body;
  const newTask = new Task({
    name,
    description,
    projectId,
    freelancersId,
    commentsId,
    weight,
    tasktype
  });
  await newTask.save();
  const project = await Project.findById(projectId);
  if (project) {
    const store = [];
    project.tasksId = newTask._id;
    for (let i = 0; i < freelancersId.length; i++) {
      project.freelancersId.push(freelancersId[i]);
      const freelancer = await Freelancer.findById(freelancersId[i]);
      store.push(freelancer);
    }
    project.save();
    console.log(store);
    for (let j = 0; j < store.length; j++) {
      store[j].tasksId.push([newTask._id, 0]);
      store[j].projectsId.push(projectId);
      store[j].save();
    }
  }
  res.send(true);
});

module.exports = router;
