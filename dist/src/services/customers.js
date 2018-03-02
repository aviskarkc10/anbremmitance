'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByRegistrationId = getByRegistrationId;
exports.getCIFCustomerById = getCIFCustomerById;

var _customers = require('../models/customers');

var customersModel = _interopRequireWildcard(_customers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function getByRegistrationId(id, res) {
  return customersModel.getByRegistrationId(id, res);
}

function getCIFCustomerById(user, res) {
  return customersModel.getCIFCustomerById(user, res);
}