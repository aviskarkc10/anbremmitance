'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getByRegistrationId = getByRegistrationId;

var _model = require('../constants/model');

function getByRegistrationId(user, res) {
  return new Promise(function (resolve, reject) {
    var agent = {};

    _model.data && _model.data.forEach(function (singleAgent) {
      if (singleAgent.registration_id === user.id) {
        agent = {
          username: singleAgent.username,
          password: singleAgent.password
        };
      }
    });

    if (!Object.keys(agent).length) return res.status(404).send({ status: 404, message: 'Not found' });;

    resolve(agent);
  });
}