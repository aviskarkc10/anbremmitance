import * as authModel from '../models/auth';

export function login(agent, res) {
  return authModel.login(agent, res);
}
