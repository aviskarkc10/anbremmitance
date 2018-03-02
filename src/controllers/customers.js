import { Router } from 'express';

import * as customerValidator from '../middlewares/validators/customer';

import * as customerService from '../services/customers';

let router = Router();

router.post('/cif-lookup', customerValidator.validateCIFCustomer, (req, res, next) => {
  customerService.getCIFCustomerById(req.body, res)
    .then(response => {
      res.json({
        data: response
      })
    }).catch(error => next(error))
})

router.post('/lookup', customerValidator.validateCustomer, (req, res, next) => {
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
