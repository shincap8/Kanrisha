const express = require('express');
const router = express.Router();
const Freelancer = require('../models/freelancer');
const Task = require('../models/task');

router.post('/signUp/freelancer', async (req, res) => {
  const {
    name,
    email,
    projectsId,
    tasksId,
    commentsId,
    advancedIds,
    password,
    profession
  } = req.body;
  const newFreelancer = new Freelancer({
    name,
    email,
    projectsId,
    tasksId,
    commentsId,
    advancedIds,
    password,
    profession
  });
  newFreelancer.password = await newFreelancer.encryptpassword(password);
  await newFreelancer.save();
  res.send(true);
});

router.post('/signIn/freelancer', async (req, res) => {
  const { email, password } = req.body;
  const freelancer = await Freelancer.findOne({ email });
  if (!freelancer) {
    res.send(false);
  } else {
    const match = await freelancer.matchpassword(password);
    if (match) {
      res.send(freelancer._id);
    } else {
      res.send(false);
    }
  }
});

router.get('/all-freelancers', async (req, res) => {
  const freelancer = await Freelancer.find();
  res.send(freelancer);
});

router.get('/all-freelancers/:taskId', async (req, res) => {
  const task = await Task.findById(req.params.taskId);
  if (task) {
    const freelancer = await Freelancer.find();
    const store = [];
    for (let i = 0; i < freelancer.length; i++) {
      if (!(task.freelancersId.includes(freelancer[i]._id))) {
        store.push(freelancer[i]);
      }
    }
    res.send(store);
  }
});

router.get('/freelancer/:id', async (req, res) => {
  const freelancer = await Freelancer.findById(req.params.id);
  res.send(freelancer);
});

module.exports = router;
