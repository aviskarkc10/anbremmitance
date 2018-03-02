'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateCustomer = validateCustomer;
exports.validateCIFCustomer = validateCIFCustomer;
function validateCustomer(req, res, next) {
  var payload = req.body;

  if (!payload.id) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
};

function validateCIFCustomer(req, res, next) {
  var payload = req.body;

  if (!payload.cifNo) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
}