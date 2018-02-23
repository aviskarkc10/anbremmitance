'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _auth = require('../models/auth');

var authModel = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function login(agent) {
  return authModel.login(agent);
}