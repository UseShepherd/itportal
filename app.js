const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const database = require('./config/database.js');

const mainRoutes = require('./routes/index');
const documents = require('./routes/documents');
const inventory = require('./routes/inventory');
const support = require('./routes/support');


const app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'),
                  path.join(__dirname, 'views/documents/'),
                  path.join(__dirname, 'views/admin/'),
                  path.join(__dirname, 'views/directory/'),
                  path.join(__dirname, 'views/inventory/'),
                  path.join(__dirname, 'views/support/')]);

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);
app.use('/documents', documents);
app.use('/inventory', inventory);
app.use('/support', support);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
