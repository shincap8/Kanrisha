const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const Manager = require('../models/manager');
const Freelancer = require('../models/freelancer');
const Task = require('../models/task');

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

router.get('/project/manager/:managerid', async (req, res) => {
  const projects = await Project.findById(req.params.managerid);
  res.send(projects);
});

router.get('/project/freelanceer/:freelancerid', async (req, res) => {
  const projects = await Project.findById(req.params.freelancerid);
  res.send(projects);
});

router.get('/active-project/:id', async (req, res) => {
  const manager = await Manager.findById(req.params.id);
  const store = [];
  for (let i = 1; i < manager.projectsId.length; i++) {
    const project = await Project.findById(manager.projectsId[i]);
    if (project) {
      if (project.status === true) {
        store.push(project);
      }
    }
  }
  res.send(store);
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

router.get('/project/tasks/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    const store = [];
    for (let i = 0; i < project.tasksId.length; i++) {
      const task = await Task.findById(project.tasksId[i]);
      if (task) {
        store.push(task);
      }
    }
    res.send(store);
  } else {
    res.send(false);
  }
});

router.put('/changestatus/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.status = false;
  project.save();
  res.send(true);
});

module.exports = router;
