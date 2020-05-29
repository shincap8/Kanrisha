const express = require('express');
const router = express.Router();
const Freelancer = require('../models/freelancer');

router.post('/signUp/freelancer', async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;
  const newFreelancer = new Freelancer({
    name,
    email,
    password
  });
  await newFreelancer.save();
  console.log(req.body);
  res.send('saved succesfully');
});

module.exports = router;
