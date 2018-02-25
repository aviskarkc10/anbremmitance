import { Router } from 'express';

import * as customerService from '../services/customers';

let router = Router();

router.post('/lookup', (req, res, next) => {
  customerService.getByRegistrationId(req.body, res)
    .then((response) => {
      res.json({
        data: response
      });
    }).catch(error => {
      next(error)
    })
});

export default router;
