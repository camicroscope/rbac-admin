/**
 * This file is the single point of entry for all configuration and bootstrapping
 */
const config = {
  server: (x) => `http://localhost:4010/api/${x}`,
};

export { config };
