/**
 * This file is the single point of entry for all configuration and bootstrapping
 */
const config = {
  server: (x) => `http://localhost:5000/${x}`,
};

export { config };
