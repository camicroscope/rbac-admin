/**
 * This method is used to transform the data format used by the client to the
 * format used by the server. The server uses a different format than the
 * client as the server is responsible for the storage and initialization of
 * the access control module.
 */
export const transformToServerFormat = (matrix) => {
  const allRulesList = [];
  const resources = Object.keys(matrix);

  resources.forEach((resource) => {
    const operations = Object.keys(matrix[resource]);

    operations.forEach((operation) => {
      const standardOperations = ["create", "read", "update", "delete"];
      const roles = matrix[resource][operation];

      roles.forEach((role) => {
        if (standardOperations.includes(operation)) {
          // generic items allowed
          allRulesList.push({
            role,
            resource,
            action: `${operation}:any`,
            attributes: ["*"],
          });
        } else {
          // only reads allowed
          allRulesList.push({
            role,
            resource: `${resource}:${operation}`,
            action: `read:any`,
            attributes: ["*"],
          });
        }
      });
    });
  });
  return allRulesList;
};
