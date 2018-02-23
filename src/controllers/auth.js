import { Router } from 'express';

import * as authService from '../services/auth';

let router = Router();

router.post('/agent-login', (req, res, next) => {
  authService.login(req.body)
    .then((response) => {
      res.json({
        data: response
      });
    }).catch(error => {
      return res.status(404).send({ message: 'Not found.' });
    })
});

export default router;
