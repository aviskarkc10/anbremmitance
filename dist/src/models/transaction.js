'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeTransaction = storeTransaction;
exports.fetchTransaction = fetchTransaction;
exports.getSummary = getSummary;
var transactions = [];

function storeTransaction(transaction, res) {
  return new Promise(function (resolve, reject) {
    if (!Object.keys(transaction).length) {
      return res.status(403).send({ status: 403, message: 'Invalid data' });
    }

    transactions.push(transaction);

    return resolve('Successfully stored transaction.');
  });
};

function fetchTransaction(agent, res) {
  var agentTransaction = [];

  return new Promise(function (resolve, reject) {
    if (!agent.agentId) {
      return res.status(403).send({ status: 403, message: 'Invalid data' });
    }

    transactions.length && transactions.forEach(function (singleTransaction) {
      if (singleTransaction.agentID === agent.agentId) {
        agentTransaction.push(singleTransaction);
      }
    });

    if (agentTransaction.length) {
      return resolve(agentTransaction);
    }

    return res.status(404).send({ status: 404, message: 'Not found' });
  });
}

function getSummary(transaction, res) {
  var agentTransactions = [];
  var sum = 0;

  console.log(transactions);

  return new Promise(function (resolve, reject) {
    try {
      if (!(transaction.agentId && transaction.date)) {
        return res.status(403).send({ status: 403, message: 'Invalid data' });
      }

      agentTransactions = transactions.map(function (singleTransaction) {
        var date = new Date(singleTransaction.timeStamp).toISOString().split('T')[0];

        console.log('here');
        if (singleTransaction.agentID === transaction.agentId && date === transaction.date) {
          return singleTransaction;
        }
      });

      agentTransactions.length && agentTransactions.forEach(function (agentTransaction) {
        console.log(agentTransaction);
        sum = agentTransaction.transferAmount ? sum + agentTransaction.transferAmount : sum;
      });

      var data = {
        totalAmount: sum,
        count: agentTransactions.length
      };

      return resolve(data);
    } catch (err) {
      return res.status(400).send({ status: 400, message: 'Oops could not fetch summary.' });
    }
  });
}