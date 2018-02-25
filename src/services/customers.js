import * as customersModel from '../models/customers';

export function getByRegistrationId(id, res) {
  return customersModel.getByRegistrationId(id, res);
}