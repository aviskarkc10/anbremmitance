import { Router } from 'express';

import * as authValidator from './middlewares/validators/auth';

import authController from './controllers/auth';
import customerController from './controllers/customers';
import transactionController from './controllers/transaction';

let router = Router();

router.get('/', (req, res) => {
  res.json({
    api: 'ANB Remittance api'
  });
});

router.use('/auth', authValidator.validateAuth, authController);
router.use('/customers', customerController);
router.use('/transaction', transactionController);

export default router;
