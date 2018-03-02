import * as customersModel from '../models/customers';

export function getByRegistrationId(id, res) {
  return customersModel.getByRegistrationId(id, res);
}

export function getCIFCustomerById(user, res) {
  return customersModel.getCIFCustomerById(user, res);
}