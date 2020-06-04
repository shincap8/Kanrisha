const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const Advance = require('../models/advance_measure');
const Freelancer = require('../models/freelancer');
const Task = require('../models/task');

router.get('/project-advance/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  let totaladvance = 0;
  for (let i = 0; i < project.advancedIds.length; i++) {
    const advance = await Advance.findById(project.advancedIds[i]);
    if (advance) {
      console.log(advance);
      totaladvance = totaladvance + advance.toprojectadvanced;
    }
  }
  res.send(String(totaladvance));
});

router.get('/task-advance/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (task.tasktype === 1) {
    const amountoffreelancers = task.freelancersId.length;
    const individualweight = (task.weight / amountoffreelancers) / 100;
    let totaladvance = 0;
    for (let i = 0; i < task.advancesId.length; i++) {
      const castId = String(task.advancesId[i]);
      const advanced = await Advance.findById(castId);
      if (advanced) {
        advanced.toprojectadvanced = advanced.localadvanced * individualweight;
        advanced.save();
        totaladvance = totaladvance + (advanced.localadvanced * individualweight);
      }
    }
    const weightedadvance = (totaladvance * 100) / task.weight;
    res.send(String(weightedadvance));
  }
});

router.put('/modifyadvance', async (req, res) => {
  const {
    freelancerId,
    taskid,
    value
  } = req.body;
  const freelancer = await Freelancer.findById(freelancerId);
  const task = await Task.findById(taskid);
  for (let i = 0; i < freelancer.advancedIds.length; i++) {
    const castId = String(freelancer.advancedIds[i]);
    const advance = await Advance.findById(castId);
    if (advance) {
      if (advance.taskid === taskid) {
        if (task.tasktype === 1) {
          advance.localadvanced = value;
          const amountoffreelancers = task.freelancersId.length;
          const partialweight = (task.weight / amountoffreelancers) / 100;
          advance.toprojectadvanced = value * partialweight * (task.weight / 100);
          advance.save();
        }
      }
    }
  }
  res.send(true);
});

module.exports = router;
