import { Router } from 'express';

import * as customerService from '../services/customers';

let router = Router();

router.post('/lookup', (req, res, next) => {
  customerService.getByRegistrationId(req.body)
    .then((response) => {
      res.json({
        data: response
      });
    }).catch(error => {
      return res.status(404).send({ message: 'Not found' });
    })
});

export default router;
