/** import react and other dependencies */
import React, { useState } from 'react';

import { Header } from './header';
/** import peer components */
import { Row } from './row';

export const Card = ({ name, allResources, roles, remote }) => {
  /** using state to expand the card */
  const [expanded, setExpanded] = useState(false);
  const operationNames = Object.keys(allResources[name]);

  return (
    <div className="mx-16 ">
      <div className="flex flex-wrap">
        <div className="w-full mx-auto my-4 bg-white border rounded-md shadow-md ">
          {/*
           * card header
           * shows only the tilte of the card when not expanded
           * shows the title and the rows when expanded
           */}
          <div
            onClick={() => {
              setExpanded(!expanded);
            }}
            className="duration-500 "
          >
            <Header title={name} expanded={expanded} roles={roles} />
          </div>

          {/* displat the card contents only when expanded is true */}
          {expanded && (
            <div className="">
              {operationNames.map(operation => (
                <div
                  key={`${name}:${operation}`}
                  className="mb-3 text-base leading-relaxed text-blueGray-500"
                >
                  <Row
                    title={operation}
                    resource={name}
                    allResources={allResources}
                    remote={remote}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
