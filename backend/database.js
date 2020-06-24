const mongoose = require('mongoose');

/**
 * configure all about the database
 */
const MONGODB_URL = 'mongodb://localhost/kanrisha';

mongoose.connect(MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(db => console.log('Database conected'));
