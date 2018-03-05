import * as transactionModel from '../models/transaction';

export function storeTransaction(transaction, res) {
  return transactionModel.storeTransaction(transaction, res);
}

export function fetchTransaction(agent, res) {
  return transactionModel.fetchTransaction(agent, res);
}