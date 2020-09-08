require('dotenv').config();
var express = require('express');
var path = require('path');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultLayout: 'site/layouts/main',
  layoutsDir: path.join(__dirname, 'views'),
  partialsDir: path.join(__dirname, 'views'),
}));

app.use(logger(process.env.APP_ENV));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Sessions
var session = require('express-session');
app.use(session({secret: process.env.APP_SESSION}));

// Configuring Passport
var passport = require('passport');
app.use(passport.initialize());

// Using the flash middleware provided by connect-flash to store messages in session
// and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./config/passport');
initPassport(passport);

var adminRouters = require('./routes/admin');
var siteRouters = require('./routes/site');

// set routers
app.use(adminRouters);
app.use(siteRouters);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log();
    res.status(404);
    res.render('404', {
      layout: 'admin/layouts/blank',
      title: '404 Not Found',
      isAdminPanel: (req.url).search('/admin') >= 0 //TODO wtf?
    });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('500', {
    layout:'admin/layouts/blank',
    title: '500 Internal Server Error'
  });
});

module.exports = app;
