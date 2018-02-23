'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _auth = require('../services/auth');

var authService = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.post('/agent-login', function (req, res, next) {
  authService.login(req.body).then(function (response) {
    res.json({
      data: response
    });
  }).catch(function (error) {
    return res.status(404).send({ message: 'Not found.' });
  });
});

exports.default = router;