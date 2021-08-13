/** import react and other dependencies */
import React, { useEffect, useState } from "react";

/** import components */
import { Card } from "../../components/card";

/** load services */
import { LoadRules } from "../../services/network";
import { expand } from "../../services/rules";

export const DashboardPage = () => {
  /** store the rules in state */
  const [resources, setResources] = useState([]);

  /** store the roles in state */
  const [roles, setRoles] = useState([]);

  /** load the rules */
  useEffect(() => {
    LoadRules().then((compressedRules) => {
      const { roles, resources } = expand(compressedRules);
      setResources(resources);
      setRoles(roles);
    });
  }, []);

  return (
    <div>
      {Object.keys(resources).map((resourceName) => {
        return (
          <Card name={resourceName} allResources={resources} roles={roles} key={resourceName} />
        );
      })}
    </div>
  );
};
