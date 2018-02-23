import { data } from '../constants/model';

export function getByRegistrationId(user) {
  return new Promise((resolve, reject) => {
    let agent = {};
    
    data && data.forEach((singleAgent) => {
      if (singleAgent.registration_id === user.id) {
        agent = {
          username: singleAgent.username,
          password: singleAgent.password
        };
      }
    })

    if (!Object.keys(agent).length)
      throw new Error('Not found.');

    resolve(agent);
  })
}