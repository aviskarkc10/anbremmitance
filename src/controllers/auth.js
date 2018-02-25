import { Router } from 'express';

import * as authService from '../services/auth';

let router = Router();

router.post('/agent-login', (req, res, next) => {
  authService.login(req.body, res)
    .then((response) => {
      res.json({
        data: response
      });
    }).catch(error => {
      next(error);
    })
});

export default router;
