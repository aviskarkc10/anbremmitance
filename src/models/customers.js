import { data } from '../constants/model';

export function getByRegistrationId(user, res) {
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
      return res.status(404).send({ status: 404, message: 'Not found' });;

    resolve(agent);
  })
}