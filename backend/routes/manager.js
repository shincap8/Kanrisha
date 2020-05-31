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

router.get('/projects-all', async (req, res) => {
  const store = [];
  const { managerId } = req.body;
  const manager = await Manager.findById(managerId);
  const projectsId = manager.projectsId;
  for (let i = 1; i < projectsId.length; i++) {
    store.push(await Project.findById(projectsId[i]));
  }
  res.send(store);
});

module.exports = router;
