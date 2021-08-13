/**
 * This file transforms the input raw matrix obtaied from the backed
 * into a structured and verbose object based on roles and resources
 */

const firstOrderRules = (x) => {
  const roles = Object.keys(x);

  const rulesList = [];

  roles.forEach((role) => {
    const rightsOfGivenRole = x[role];

    Object.keys(rightsOfGivenRole).forEach((resource) => {
      if (resource === "$extend") {
        return;
      }

      if (resource.indexOf(".") !== -1) {
        const [category, operation] = resource.split(".");
        rulesList.push({
          role,
          standard: false,
          resource: category,
          operation,
        });
        return;
      }

      const allRightsObject = rightsOfGivenRole[resource];
      const givenRights = Object.keys(allRightsObject);

      givenRights.forEach((rightName) => {
        const [trimmedRightName] = rightName.split(":");
        rulesList.push({
          role,
          standard: true,
          resource,
          operation: trimmedRightName,
        });
      });
    });
  });

  return rulesList;
};

const getHierchy = (x) => {
  const roles = Object.keys(x);

  const hierchy = {};

  roles.forEach((role) => {
    if (hierchy[role] === undefined && x[role].$extend !== undefined) {
      hierchy[role] = x[role].$extend;
    } else {
      hierchy[role] = [];
    }
  });

  return hierchy;
};

const categorizeRulesBasedOnRoles = (rulesList, hierchy) => {
  const roleWiseRuleList = {};
  rulesList.forEach((rulerow) => {
    if (roleWiseRuleList[rulerow.role] === undefined) {
      roleWiseRuleList[rulerow.role] = [];
    }
    roleWiseRuleList[rulerow.role].push(rulerow);
  });

  return roleWiseRuleList;
};

const roleResolver = (roleBasedRules, hierchy) => {
  const roles = Object.keys(hierchy);
  const consolidatedRules = {};

  roles.forEach((role) => {
    const ruleArray = [];
    if (roleBasedRules[role] === undefined) {
      roleBasedRules[role] = [];
    }

    // load the base rules directly defined for role
    ruleArray.push(...roleBasedRules[role]);

    if (hierchy[role].length !== 0) {
      hierchy[role].forEach((parent) => {
        ruleArray.push(...consolidatedRules[parent]);
      });
    }

    consolidatedRules[role] = ruleArray;
  });

  return consolidatedRules;
};

const consolidatedRulesByRole = (data) => {
  const rulesList = firstOrderRules(data);
  const hierchy = getHierchy(data);
  const rulesBasedOnRoles = categorizeRulesBasedOnRoles(rulesList, hierchy);
  const consolidatedRules = roleResolver(rulesBasedOnRoles, hierchy);
  return consolidatedRules;
};

module.exports = { consolidatedRulesByRole };
