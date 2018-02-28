import { customers } from '../constants/model';

export function getByRegistrationId(user, res) {
  return new Promise((resolve, reject) => {
    let singleCustomer = {};

    customers && customers.forEach((customer) => {
      if (customer.customerId === user.id) {
        singleCustomer = {
          username: customer.username,
          password: customer.password
        };
      }
    })

    if (!Object.keys(singleCustomer).length)
      return res.status(404).send({ status: 404, message: 'Not found' });;

    resolve(singleCustomer);
  })
}