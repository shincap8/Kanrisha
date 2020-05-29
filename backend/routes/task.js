const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/:projectid/new-task', async (req, res) => {
  const {
    name,
    description
  } = req.body;
  const projectId = req.params.projectid;
  const newTask = new Task({
    name,
    description,
    projectId
  });
  await newTask.save();
  console.log(req.body);
  res.send('saved succesfully');
});

module.exports = router;
