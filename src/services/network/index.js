import axios from "axios";

import { config } from "../../config";

/** make a GET request to the API to fetch all rules related to RBAC */
export const LoadRules = async () => {
  const { data: rules } = await axios.get(config.server("matrix.json"));
  return rules;
};

export const UpdateRules = async (newRules) => {
  const payload = { rules: newRules };
  const { data } = await axios.post(config.server("/roles/update"), payload);
  return data;
};
