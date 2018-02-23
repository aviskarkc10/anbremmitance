'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var PORT = 8080;

var app = (0, _express2.default)();
app.use(_bodyParser2.default.json());

app.use('/api', _routes2.default);

app.listen(PORT, function () {
  console.log('Node app is running on port, ' + PORT);
});