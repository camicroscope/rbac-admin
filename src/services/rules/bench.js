/**
 * This file transforms the input raw matrix obtaied from the backed
 * into a structured and verbose object based on roles and resources
 */
const firstOrderRules = (x) => {
  // get the roles registered on the server
  const roles = Object.keys(x);

  // list to store the computed rules
  const rulesList = [];

  roles.forEach((role) => {
    const rightsOfGivenRole = x[role];

    /**
     * Resources are the entities on which the operations are performed.
     * For example:
     * slide is a resource, on which operations like create, update, delete
     * or edit can be performed.
     *
     * There are two types of operations supported by the server. One are the
     * standard CUD operations like create, update, delete and edit. These
     * have a rich API and are supported by the frameworks as well. The second
     * are the non standard operations like listing all rights of a user.
     *
     * Clearly, this does not fall under standard CUD operations, and therefore
     * does not have dedicated apis. For these, a new notion is used which
     * combines the resources and operations with a period.
     */
    Object.keys(rightsOfGivenRole).forEach((resource) => {
      if (resource === "$extend") {
        return;
      }

      /** a non standard operation name contains a period. */
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

      /** operations are also called rights */
      const givenRights = Object.keys(allRightsObject);
      givenRights.forEach((rightName) => {
        /** to trim 'read' from 'read:any' */
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

/**
 * This method parses the matrix to return a flat array of hierachy in roles.
 *
 * The format of the returned data is as follows:
 * {
 *     parent: [],
 *     parent2: [],
 *     child: [parent1, parent2],
 * }
 *
 * Note that it returns an ordered array of parents. This is mainly used
 * to merge the rule arrays of the parents and the child.
 */
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

/**
 * This function groups the rights based on rules.
 *
 * This function is mainly an intermediate step to the final transformation,
 * added to simplify the logic and transformation process.
 */
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

/**
 * This is the main function which returns the final data structure and
 * completes the transformation of the input data.
 */
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
