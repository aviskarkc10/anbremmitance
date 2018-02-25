import { data } from '../constants/model';

export function login(user, res) {
  return new Promise((resolve, reject) => {
    let agent = {};

    data && data.forEach((singleAgent) => {
      if (singleAgent.username === user.username &&
        singleAgent.password === user.password &&
        singleAgent.card_no === user.card_no) {
        agent = {
          agent_code: singleAgent.agent_code
        };
      }
    })

    if (!Object.keys(agent).length){
      return res.status(404).send({status:404, message: 'Not found'}); ;
    }

    resolve(agent);
  })
}
