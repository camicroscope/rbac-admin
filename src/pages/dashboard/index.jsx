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
    console.log("hits");
    LoadRules().then((compressedRules) => {
      const { resources, roles } = matrixToStateFormat(compressedRules);
      setRoles(roles);
      setResources(resources);
    });
  }, []);

  return (
    <div>
      {Object.keys(resources).map((resourceName) => {
        return (
          <Card
            name={resourceName}
            allResources={resources}
            roles={roles}
            key={resourceName}
          />
        );
      })}
    </div>
  );
};
