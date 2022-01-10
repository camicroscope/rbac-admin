/* eslint-disable no-shadow */
/** import react and other dependencies */
import React, { useEffect, useState } from 'react';

/** import components */
import { Card } from '../../components/card';
/** load services */
import { LoadRules, UpdateRules } from '../../services/network';
import { matrixToStateFormat } from '../../services/rules';
import { transformToServerFormat } from '../../services/rules/serverFormat';

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
      // console.log('All roles debug :', JSON.stringify(resources));
    });
  }, []);

  // to update the global storage of resources
  const updateGlobalState = (resource, operation, newRoleArray) => {
    const currentSnapShot = resources;
    currentSnapShot[resource][operation] = [...newRoleArray];
    setResources(currentSnapShot);
  };

  // method to send new map to server
  const saveChanges = () => {
    const serverFormat = transformToServerFormat(resources);
    try {
      UpdateRules(serverFormat)
        .then((response) => {
          // console.log(response);
          alert(response);
        })
        .catch((e) => {
          console.error(`Error updating rules`, e);
        });
    } catch (e) {
      console.error(`Error updating rules`, e);
    }
  };

  return (
    <div>
      {Object.keys(resources).map((resourceName) => (
        <Card
          name={resourceName}
          allResources={resources}
          roles={roles}
          remote={updateGlobalState}
          key={resourceName}
        />
      ))}

      <div className="flex">
        <div className="m-auto">
          <button
            type="button"
            onClick={saveChanges}
            className="w-32 px-5 py-1 my-10 ml-auto text-base font-normal border rounded-md border-purple-500 shadow-sm hover:shadow-lg text-purple-600 hover:bg-purple-600 hover:text-white duration-500 "
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
