var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var {createProxyMiddleware} = require('http-proxy-middleware');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', createProxyMiddleware({
	target: 'http://192.168.30.90:8080',
	changeOrigin: true,
	pathRewrite: {
	  "^/api" : "/" //接口开头通用路径
	}
}))
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
const hostName = '192.168.30.43'; //本地IP
const port = 8085; //端口
app.listen(port, hostName, () => {
    console.log(`服务运行在http://${hostName}:${port}`);
});
console.log('服务启动成功');

module.exports = app;
