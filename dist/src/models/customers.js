'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByRegistrationId = getByRegistrationId;

var _model = require('../constants/model');

function getByRegistrationId(user, res) {
  return new Promise(function (resolve, reject) {
    var singleCustomer = {};

    _model.customers && _model.customers.forEach(function (customer) {
      if (customer.customerId === user.id) {
        singleCustomer = {
          username: customer.username,
          password: customer.password
        };
      }
    });

    if (!Object.keys(singleCustomer).length) return res.status(404).send({ status: 404, message: 'Not found' });;

    resolve(singleCustomer);
  });
}