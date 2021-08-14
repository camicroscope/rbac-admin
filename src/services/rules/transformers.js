/**
 * This file transforms the incoming raw data into a falt list based on
 * resources and possible operations
 */
const getListOfResources = (ruleMappings) => {
  const resources = {};
  const resourcesAlternateFormat = {};

  const roles = Object.keys(ruleMappings);

  // get roles for each roles
  roles.forEach((role) => {
    const individualMappings = Object.keys(ruleMappings[role]);

    // loop through all individual mappings to get opertaion types
    individualMappings.forEach((resource) => {
      if (resource === "$extend") {
        return;
      }

      //   case of non standard CRUD operations
      if (resource.indexOf(".") !== -1) {
        const [category, operation] = resource.split(".");
        if (resources[category] === undefined) {
          resources[category] = [{ name: operation, allowed: [] }];
          resourcesAlternateFormat[category] = {
            [operation]: [],
          };
        } else {
          resources[category].push({
            name: operation,
            allowed: [],
          });
          resourcesAlternateFormat[category][operation] = [];
        }
        return;
      }

      //   case of standard CRUD operations
      const operations = Object.keys(ruleMappings[role][resource]);
      operations.forEach((operation) => {
        const [firstPart] = operation.split(":");
        if (resources[resource] === undefined) {
          resources[resource] = [{ name: firstPart, allowed: [] }];
          resourcesAlternateFormat[resource] = {
            [firstPart]: [],
          };
        } else {
          resources[resource].push({
            name: firstPart,
            allowed: [],
          });
          resourcesAlternateFormat[resource][firstPart] = [];
        }
      });
    });
  });

  return { roles, resources, resourcesAlternateFormat };
};

const allResourcesMapping = (data) => {
  return getListOfResources(data);
};

module.exports = { allResourcesMapping };
