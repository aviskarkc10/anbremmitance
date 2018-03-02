import { Router } from 'express';

import * as authValidator from './middlewares/validators/auth';

import authController from './controllers/auth';
import customerController from './controllers/customers';

let router = Router();

router.get('/', (req, res) => {
  res.json({
    api: 'ANB Remittance api'
  });
});

router.use('/auth', authValidator.validateAuth, authController);
router.use('/customers', customerController);

export default router;
