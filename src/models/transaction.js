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

  console.log(transactions);
  console.log(agent)

  return new Promise((resolve, reject) => {
    if (!agent.agentId) {
      return res.status(403).send({ status: 403, message: 'Invalid data' });      
    }
    
    transactions.length && transactions.forEach((singleTransaction) => {
      console.log(singleTransaction.agentID)
      if(singleTransaction.agentID === agent.agentId) {
        agentTransaction.push(singleTransaction);
      }
    });

    if(agentTransaction.length){
      return resolve(agentTransaction);
    }

    return res.status(404).send({ status: 404, message: 'Not found' });    
  })
}
