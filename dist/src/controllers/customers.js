'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _customer = require('../middlewares/validators/customer');

var customerValidator = _interopRequireWildcard(_customer);

var _customers = require('../services/customers');

var customerService = _interopRequireWildcard(_customers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.post('/cif-lookup', customerValidator.validateCIFCustomer, function (req, res, next) {
  customerService.getCIFCustomerById(req.body, res).then(function (response) {
    res.json({
      data: response
    });
  }).catch(function (error) {
    return next(error);
  });
});

router.post('/lookup', customerValidator.validateCustomer, function (req, res, next) {
  customerService.getByRegistrationId(req.body, res).then(function (response) {
    res.json({
      data: response
    });
  }).catch(function (error) {
    next(error);
  });
});

exports.default = router;