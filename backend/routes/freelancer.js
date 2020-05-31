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
    password
  } = req.body;
  const newFreelancer = new Freelancer({
    name,
    email,
    projectsId,
    tasksId,
    commentsId,
    password
  });
  await newFreelancer.save();
  console.log(req.body);
  res.send(true);
});

module.exports = router;
