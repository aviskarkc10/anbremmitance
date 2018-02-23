'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateAuth = validateAuth;
function validateAuth(req, res, next) {
  var payload = req.body;

  if (!payload.username || !payload.password || !payload.card_no) {
    res.status(400).send({ message: 'Invalid request.' });
  }

  next();
}