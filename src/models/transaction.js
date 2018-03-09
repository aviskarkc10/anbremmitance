var transactions = [];

export function storeTransaction(transaction, res) {
  return new Promise((resolve, reject) => {
    if (!Object.keys(transaction).length) {
      return res.status(403).send({ status: 403, message: 'Invalid data' });
    }

    transactions.push(transaction);

    return resolve('Successfully stored transaction.');
  });
};

export function fetchTransaction(agent, res) {
  let agentTransaction = [];

  return new Promise((resolve, reject) => {
    if (!agent.agentId) {
      return res.status(403).send({ status: 403, message: 'Invalid data' });
    }

    transactions.length && transactions.forEach((singleTransaction) => {
      if (singleTransaction.agentID === agent.agentId) {
        agentTransaction.push(singleTransaction);
      }
    });

    if (agentTransaction.length) {
      return resolve(agentTransaction);
    }

    return res.status(404).send({ status: 404, message: 'Not found' });
  })
}

export function getSummary(transaction, res) {
  let agentTransactions = [];
  let sum = 0;

  return new Promise((resolve, reject) => {
    try {
      if (!(transaction.agentId && transaction.date)) {
        return res.status(403).send({ status: 403, message: 'Invalid data' });
      }

      agentTransactions = transactions.filter((singleTransaction) => {
        let date = new Date(singleTransaction.timeStamp).toISOString().split('T')[0];

        if (singleTransaction.agentID === transaction.agentId &&
          date === transaction.date) {
          return singleTransaction;
        }
      });

      agentTransactions && agentTransactions.length && agentTransactions.forEach((agentTransaction) => {
        sum = agentTransaction && agentTransaction.transferAmount ? sum + agentTransaction.transferAmount : sum;
      });

      let data = {
        totalAmount: sum,
        count: agentTransactions.length
      }

      return resolve(data);
    }
    catch (err) {
      return res.status(400).send({ status: 400, message: 'Oops could not fetch summary.' });
    }
  })
}
