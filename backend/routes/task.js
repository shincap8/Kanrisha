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
    amount,
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
    amount,
    deadline
  });
  await newTask.save();
  console.log(newTask);
  const project = await Project.findById(projectId);
  project.tasksId.push(newTask._id);
  project.save();
  res.send(newTask._id);
});

router.post('/tasks/addfreelancers', async (req, res) => {
  const {
    taskId,
    freelancerids,
    projectid
  } = req.body;
  const project = await Project.findById(projectid);
  const task = await Task.findById(taskId);
  for (let i = 0; i < freelancerids.length; i++) {
    const freelancer = await Freelancer.findById(freelancerids[i]);
    freelancer.tasksId.push(taskId);
    if (!(project.freelancersId.includes(freelancerids[i]))) {
      project.freelancersId.push(freelancerids[i]);
    }
    const advance = Advance({
      freelancerId: freelancerids[i],
      taskid: taskId,
      localadvanced: 0,
      toprojectadvnced: 0
    });
    await advance.save();
    freelancer.advancedIds.push(advance._id);
    freelancer.projectsId.push(project._id);
    project.advancedIds.push(advance._id);
    task.freelancersId.push(freelancerids[i]);
    task.advancesId.push(advance._id);
    await freelancer.save();
    await project.save();
    await task.save();
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
