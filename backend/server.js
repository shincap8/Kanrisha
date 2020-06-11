const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, '/views'));
app.engine('.hbs', exphbs({
  deafultlayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: 'hbs'
}));
app.set('view engine', '.hbs');

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extenden: false }));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// routes
app.use(require('./routes/project'));
app.use(require('./routes/manager'));
app.use(require('./routes/task'));
app.use(require('./routes/freelancer'));
app.use(require('./routes/advances'));

// global variables

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
