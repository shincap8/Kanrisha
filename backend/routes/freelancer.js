const express = require('express');
const router = express.Router();
const Freelancer = require('../models/freelancer');

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
  await newFreelancer.save();
  console.log(req.body);
  res.send(true);
});

router.get('/all-freelancers', async (req, res) => {
  const freelancer = await Freelancer.find();
  console.log(freelancer);
  res.send(freelancer);
});

module.exports = router;
