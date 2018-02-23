'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCustomer = validateCustomer;
function validateCustomer(req, res, next) {
  var payload = req.body;

  if (!payload.id) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
}