'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;

var _model = require('../constants/model');

function login(user) {
  return new Promise(function (resolve, reject) {
    var agent = {};

    _model.data && _model.data.forEach(function (singleAgent) {
      if (singleAgent.username === user.username && singleAgent.password === user.password && singleAgent.card_no === user.card_no) {
        agent = {
          agent_code: singleAgent.agent_code
        };
      }
    });

    if (!Object.keys(agent).length) throw new Error('Not found');

    resolve(agent);
  });
}