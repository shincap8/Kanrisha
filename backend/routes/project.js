const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const Manager = require('../models/manager');
const Freelancer = require('../models/freelancer');

router.post('/new-project', async (req, res) => {
  const {
    managerId,
    name,
    description,
    status,
    deadline,
    freelancersId,
    tasksId,
    advanced
  } = req.body;
  const newProject = new Project({
    managerId,
    name,
    description,
    status,
    deadline,
    freelancersId,
    tasksId,
    advanced
  });
  await newProject.save();
  const manager = await Manager.findById(managerId);
  manager.projectsId.push(newProject._id);
  manager.save();
  res.send(newProject._id);
});

router.get('/project/:id', async (req, res) => {
  const projects = await Project.findById(req.params.id);
  res.send(projects);
});

router.get('/project/freelancers/:id', async (req, res) => {
  const projects = await Project.findById(req.params.id);
  const store = [];
  for (let i = 0; i < projects.freelancersId.length; i++) {
    const freelancer = await Freelancer.findById(projects.freelancersId[i]);
    store.push(freelancer);
  }
  res.send(store);
});

module.exports = router;
