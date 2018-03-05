import * as transactionModel from '../models/transaction';

export function storeTransaction(transaction, res) {
  return transactionModel.storeTransaction(transaction, res);
}

export function fetchTransaction(agent, res) {
  return transactionModel.fetchTransaction(agent, res);
}

export function getSummary(transaction, res) {
  return transactionModel.getSummary(transaction, res);
}