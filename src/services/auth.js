import * as authModel from '../models/auth';

export function login(agent) {
  return authModel.login(agent);
}
