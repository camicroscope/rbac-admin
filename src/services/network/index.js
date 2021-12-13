import axios from 'axios';

import { config } from '../../config';

/**
 * To load the current configuration of access control from server
 */
export const LoadRules = async () => {
  const { data: rules } = await axios.get(config.server('roles'));
  return rules;
};

/**
 * To save the current configuration of access control on srver
 */
export const UpdateRules = async newRules => {
  const payload = { rules: newRules };
  const { data } = await axios.post(config.server('roles'), payload);
  return data;
};
