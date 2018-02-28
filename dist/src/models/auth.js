'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _model = require('../constants/model');

function login(user, res) {
  return new Promise(function (resolve, reject) {
    var userAgent = {};
    console.log(_model.agent);
    _model.agent && _model.agent.forEach(function (singleAgent) {
      if (singleAgent.username === user.username && singleAgent.password === user.password && singleAgent.card_no === user.card_no) {
        console.log(singleAgent);
        userAgent = {
          agent_code: singleAgent.agent_code
        };
      }
    });

    if (!Object.keys(userAgent).length) {
      return res.status(404).send({ status: 404, message: 'Not found' });;
    }

    resolve(userAgent);
  });
}