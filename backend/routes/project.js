const express = require('express');
const router = express.Router();
const Project = require('../models/projects');

router.post('/new-project', async (req, res) => {
  const {
    managerId,
    name,
    description,
    status,
    deadline
  } = req.body;
  const newProject = new Project({
    managerId,
    name,
    description,
    status,
    deadline
  });
  await newProject.save();
  console.log(req.body);
  res.send('saved succesfully');
});

router.get('/projects/:id', async (req, res) => {
  const projects = await Project.find({ managerId: req.params.id });
  res.send(projects);
});

module.exports = router;
