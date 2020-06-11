const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://localhost/kanrisha';

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Database conected'));
