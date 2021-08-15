/** import react and other dependencies */
import React, { useEffect, useState } from "react";

/** import components */
import { Card } from "../../components/card";

/** load services */
import { LoadRules } from "../../services/network";
import { matrixToStateFormat } from "../../services/rules";

export const DashboardPage = () => {
  /** store the rules in state */
  const [resources, setResources] = useState([]);

  /** store the roles in state */
  const [roles, setRoles] = useState([]);

  /** load the rules */
  useEffect(() => {
    LoadRules().then((compressedRules) => {
      const { resources, roles } = matrixToStateFormat(compressedRules);

      // quick fix
      resources.middleware.loader = [...new Set(resources.middleware.loader)];
      setRoles(roles);
      setResources(resources);
      console.log(JSON.stringify(resources));
    });
  }, []);

  // to update the global storage of resources
  const updateGlobalState = (resource, operation, newRoleArray) => {
    console.log({ resource, operation, newRoleArray });
    const currentSnapShot = resources;
    currentSnapShot[resource][operation] = [...newRoleArray];
    setResources(currentSnapShot);

    console.log({ currentSnapShot, resources });
  };

  return (
    <div>
      {Object.keys(resources).map((resourceName) => {
        return (
          <Card
            name={resourceName}
            allResources={resources}
            roles={roles}
            remote={updateGlobalState}
            key={resourceName}
          />
        );
      })}
    </div>
  );
};
