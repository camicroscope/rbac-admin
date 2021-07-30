/** import react and other dependencies */
import React, { useState } from "react";

/** import peer components */
import { Row } from "./row";
import { Header } from "./header";

export const Card = ({ name, allResources, roles }) => {
  /** using state to expand the card */
  const [expanded, setExpanded] = useState(false);

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
              {allResources[name].map((resource) => (
                <div className="mb-3 text-base leading-relaxed text-blueGray-500">
                  <Row title={resource} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
