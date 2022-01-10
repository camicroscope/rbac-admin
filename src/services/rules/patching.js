/**
 * This file uses the intermediate functions to convert data into
 * a format that can be easily rendered in form of components and
 * allows easy updating via state management techniques
 */
const { consolidatedRulesByRole } = require('./bench');
const { allResourcesMapping } = require('./transformers');

/**
 * Final consumable function to convert the matrix to a format that can
 * easily be implemented as a state management component
 */
const matrixToStateFormat = (data) => {
  const rulesCategorizedByRole = consolidatedRulesByRole(data);
  const { resourcesAlternateFormat: resources } = allResourcesMapping(data);

  // now loop through each role and populate the resources array
  const roles = Object.keys(rulesCategorizedByRole);

  roles.forEach((role) => {
    const allRulesForGivenRole = rulesCategorizedByRole[role];

    allRulesForGivenRole.forEach((entry) => {
      const { resource, operation } = entry;
      resources[resource][operation].push(role);
    });
  });

  return { resources, roles };
};

module.exports = { matrixToStateFormat };
