const fs = require("fs");

const fx = (x) => {
  const roles = Object.keys(x);
  const resources = {};
  const keywords = ["$extend"];

  Object.keys(x).forEach((role) => {
    // loop through all keys in a given role

    Object.keys(x[role]).forEach((resource) => {
      /** ignore any keyword sent by server */
      if (keywords.includes(resource)) {
        return;
      }

      /**
       * if resource title contains a dot, it means it's a custom resource
       *
       * by definition, server handles these resources differently, but the
       * user actually does not have to know about it. So we club them into
       * a single resource.
       *
       * e.g.
       * user.create -> user
       * user.read -> user
       * user.update -> user
       * user.delete -> user
       * user.wcid -> user
       *
       * See how the last is a custom resource, is added to same category.
       *
       */
      let resourceName = "";
      const actions = [];

      if (resource.indexOf(".") === -1) {
        resourceName = resource;

        /** loop through the resource and store all actions */
        Object.keys(x[role][resource]).forEach((action) => {
          actions.push(action.split(":")[0]);
        });
      } else {
        /** extract the part that comes before the first . as resource name */
        const [firstPart, ...rest] = resource.split(".");

        /** store the second part as action */
        actions.push(rest.join("."));
        resourceName = firstPart;
      }
      /** store the resource name and all actions */
      if (resources[resourceName] === undefined) {
        resources[resourceName] = [...actions];
      } else {
        resources[resourceName] = [...resources[resourceName], ...actions];
      }
    });
  });

  return resources;
};

const worker = async () => {
  const data = await fs.readFileSync("./response.json", "utf-8");
  console.log(fx(JSON.parse(data)));
};

worker();
