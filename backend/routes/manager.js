const express = require('express');
const router = express.Router();
const Manager = require('../models/manager');
const Project = require('../models/projects');

router.post('/signUp/manager', async (req, res) => {
  const {
    name,
    email,
    projectsId,
    password
  } = req.body;
  const newManager = new Manager({
    name,
    email,
    projectsId,
    password
  });
  newManager.password = await newManager.encryptpassword(password);
  await newManager.save();
  console.log(req.body);
  res.send(true);
});

router.post('/signIn/manager', async (req, res) => {
  const { email, password } = req.body;
  const manager = await Manager.findOne({ email });
  if (!manager) {
    res.send(false);
  } else {
    const match = await manager.matchpassword(password);
    if (match) {
      res.send(manager._id);
    } else {
      res.send(false);
    }
  }
}
);

router.get('/manager/:id', async (req, res) => {
  const manager = await Manager.findById(req.params.id);
  if (manager) {
    res.send(manager);
  } else {
    res.send(false);
  }
});

router.get('/projects/:id', async (req, res) => {
  const projects = await Project.find({ managerId: req.params.id });
  res.send(projects);
});

module.exports = router;
