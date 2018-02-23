import { Router } from 'express';

import * as authValidator from './middlewares/validators/auth';
import * as customerValidator from './middlewares/validators/customer';

import authController from './controllers/auth';
import customerController from './controllers/customers';

let router = Router();

router.get('/', (req, res) => {
  res.json({
    api: 'ANB Remittance api'
  });
});

router.use('/auth', authValidator.validateAuth, authController);
router.use('/customers', customerValidator.validateCustomer, customerController);

export default router;
