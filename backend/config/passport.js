const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Manager = require('../models/manager');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const manager = await Manager.findOne({ email });
  if (!manager) {
    return done(null, false, { message: 'not user found' });
  } else {
    const match = await manager.matchpassword(password);
    if (match) {
      console.log('hizo match');
      return done(manager._id);
    } else {
      return done(null, false, { message: 'incorrect password' });
    }
  }
}));

passport.serializeUser((manager, done) => {
  return (done, manager.id);
});

passport.deserializeUser((id, done) => {
  Manager.findById(id, (err, manager) => {
    done(err, manager);
  });
});
