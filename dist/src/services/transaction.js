'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeTransaction = storeTransaction;
exports.fetchTransaction = fetchTransaction;
exports.getSummary = getSummary;

var _transaction = require('../models/transaction');

var transactionModel = _interopRequireWildcard(_transaction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function storeTransaction(transaction, res) {
  return transactionModel.storeTransaction(transaction, res);
}

function fetchTransaction(agent, res) {
  return transactionModel.fetchTransaction(agent, res);
}

function getSummary(transaction, res) {
  return transactionModel.getSummary(transaction, res);
}