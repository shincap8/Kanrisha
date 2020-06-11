const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Project = require('../models/projects');
const Freelancer = require('../models/freelancer');
const Advance = require('../models/advance_measure');
const Comment = require('../models/comments');

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
    let advance = null;
    if (task.tasktype === 0 || task.tasktype === 1) {
      advance = Advance({
        freelancerId: freelancerids[i],
        taskid: taskId,
        localadvanced: 0,
        toprojectadvanced: 0
      });
      await advance.save();
    } else {
      advance = Advance({
        freelancerId: freelancerids[i],
        taskid: taskId,
        localadvanced: 0,
        toprojectadvanced: 0,
        localamount: 0
      });
      await advance.save();
    }
    freelancer.advancedIds.push(advance._id);
    if (!(freelancer.projectsId.includes(projectid))) {
      freelancer.projectsId.push(project._id);
    }
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

router.post('/createcomment', async (req, res) => {
  const {
    title,
    taskId,
    description,
    idowner,
    profiletype
  } = req.body;
  const newComment = new Comment({
    title,
    taskId,
    description,
    idowner,
    profiletype
  });
  await newComment.save();
  const task = await Task.findById(taskId);
  task.commentsId.push(newComment._id);
  await task.save();
  res.send(newComment);
});

router.get('/comments-task/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  const store = [];
  for (let i = 0; i < task.commentsId.length; i++) {
    const comment = await Comment.findById(task.commentsId[i]);
    store.push(comment);
  }
  res.send(store);
});

router.get('/task/freelancers/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  const store = [];
  for (let i = 0; i < task.freelancersId.length; i++) {
    const freelancer = await Freelancer.findById(task.freelancersId[i]);
    store.push(freelancer);
  }
  res.send(store);
});

router.get('/task/:idproject/:idfreelancer', async (req, res) => {
  const store = [];
  const freelancer = await Freelancer.findById(req.params.idfreelancer);
  if (freelancer) {
    for (let i = 0; i < freelancer.tasksId.length; i++) {
      const task = await Task.findById(freelancer.tasksId[i]);
      if (task && String(task.projectId) === req.params.idproject) {
        store.push(task);
      }
    }
    res.send(store);
  } else {
    res.send(false);
  }
});

router.get('/task/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task) {
    res.send(task);
  } else {
    res.send(false);
  }
});

module.exports = router;
