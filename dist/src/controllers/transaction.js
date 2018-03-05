'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _transaction = require('../services/transaction');

var transactionService = _interopRequireWildcard(_transaction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.post('/store', function (req, res, next) {
  transactionService.storeTransaction(req.body, res).then(function (message) {
    return res.json({
      message: message
    });
  }).catch(function (err) {
    return next(err);
  });
});

router.post('/list', function (req, res, next) {
  transactionService.fetchTransaction(req.body, res).then(function (data) {
    return res.json({
      data: data
    });
  }).catch(function (err) {
    return next(err);
  });
});

router.post('/summary', function (req, res, next) {
  transactionService.getSummary(req.body, res).then(function (data) {
    return res.json({
      data: data
    });
  }).catch(function (err) {
    return next(err);
  });
});

exports.default = router;