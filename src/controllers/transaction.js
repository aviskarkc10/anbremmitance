import { Router } from 'express';

import * as transactionService from '../services/transaction';

let router = Router();

router.post('/store', (req, res, next) => {
  transactionService.storeTransaction(req.body, res)
    .then((message) => res.json({
      message: message
    }))
    .catch((err) => next(err))
});

router.post('/list', (req, res, next) => {
  transactionService.fetchTransaction(req.body, res)
    .then((data) => res.json({
      data: data
    }))
    .catch((err) => next(err))
});

export default router;