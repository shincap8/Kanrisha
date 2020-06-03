const express = require('express');
const router = express.Router();
const Project = require('../models/projects');
const Advance = require('../models/advance_measure');
const Freelancer = require('../models/freelancer');

router.get('/project-advance', async (req, res) => {
  const { projectId } = req.body;
  const project = await Project.findById(projectId);
  let totaladvance = 0;
  for (let i = 0; i < project.advancedIds.length; i++) {
    const advance = await Advance.findById(project.advancedIds[i]);
    totaladvance = totaladvance + advance.advanced;
  }
  res.send(String(totaladvance));
});

router.put('/modifyadvance', async (req, res) => {
  const {
    freelancerId,
    taskId,
    value
  } = req.body;
  const freelancer = await Freelancer.findById(freelancerId);
  for (let i = 0; i < freelancer.advancedIds.length; i++) {
    const advance = await Advance.findById(freelancer.advancedIds[i]);
    if (advance.taskid === taskId) {
      advance.advanced = value;
      advance.save();
    }
  }
  res.send(true);
});

module.exports = router;
