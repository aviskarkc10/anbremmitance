import * as customersModel from '../models/customers';

export function getByRegistrationId(id) {
  return customersModel.getByRegistrationId(id);
}