const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Project = require('../models/projects');
// const Freelancer = require('../models/freelancer');

router.post('/new-task', async (req, res) => {
  const {
    name,
    description,
    projectId,
    commentsId,
    freelancer,
    weight,
    tasktype
  } = req.body;
  const newTask = new Task({
    name,
    description,
    projectId,
    commentsId,
    freelancer,
    weight,
    tasktype
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

module.exports = router;
