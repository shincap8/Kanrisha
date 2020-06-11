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

router.get('/project/freelancer/:freelancerid', async (req, res) => {
  const freelancer = await Freelancer.findById(req.params.freelancerid);
  const store = [];
  if (freelancer) {
    for (let i = 0; i < freelancer.projectsId.length; i++) {
      const project = await Project.findById(freelancer.projectsId[i]);
      store.push(project);
    }
    res.send(store);
  } else {
    res.send(false);
  }
});

router.get('/project/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    res.send(project);
  } else {
    res.send(false);
  }
});

router.get('/active-project/:id', async (req, res) => {
  const manager = await Manager.findById(req.params.id);
  const store = [];
  for (let i = 0; i < manager.projectsId.length; i++) {
    const project = await Project.findById(manager.projectsId[i]);
    if (project) {
      if (project.status === true) {
        store.push(project);
      }
    }
  }
  res.send(store);
});

router.get('/active-project/freelancer/:id', async (req, res) => {
  const freelancer = await Freelancer.findById(req.params.id);
  const store = [];
  if (freelancer) {
    for (let i = 0; i < freelancer.projectsId.length; i++) {
      const project = await Project.findById(freelancer.projectsId[i]);
      if (project && project.status === true) {
        store.push(project);
      }
    }
    res.send(store);
  } else {
    res.send(false);
  }
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
  if (project.status === true) {
    project.status = false;
  } else {
    project.status = true;
  }
  project.save();
  res.send(true);
});

module.exports = router;
