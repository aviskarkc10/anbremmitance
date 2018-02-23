'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('./middlewares/validators/auth');

var authValidator = _interopRequireWildcard(_auth);

var _customer = require('./middlewares/validators/customer');

var customerValidator = _interopRequireWildcard(_customer);

var _auth2 = require('./controllers/auth');

var _auth3 = _interopRequireDefault(_auth2);

var _customers = require('./controllers/customers');

var _customers2 = _interopRequireDefault(_customers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.use('/auth', authValidator.validateAuth, _auth3.default);
router.use('/customers', customerValidator.validateCustomer, _customers2.default);

exports.default = router;