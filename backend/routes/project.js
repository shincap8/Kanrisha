const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const Manager = require('../models/manager');

router.post('/new-project', async (req, res) => {
  const {
    managerId,
    name,
    description,
    status,
    deadline,
    freelancersId,
    tasksId
  } = req.body;
  const newProject = new Project({
    managerId,
    name,
    description,
    status,
    deadline,
    freelancersId,
    tasksId
  });
  await newProject.save();
  const manager = await Manager.findById(managerId);
  manager.projectsId.push(newProject._id);
  manager.save();
  res.send('true');
});

router.get('/projects/:id', async (req, res) => {
  const projects = await Project.find({ managerId: req.params.id });
  res.send(projects);
});

module.exports = router;
