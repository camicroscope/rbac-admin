/** import react and other dependencies */
import React, { useState } from "react";

/** import peer components */
import { Row } from "./row";
import { Header } from "./header";

export const Card = ({ title, children }) => {
  /** using state to expand the card */
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mx-10 ">
      <div className="flex flex-wrap duration-500">
        <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl ">
          {/*
           * card header
           * shows only the tilte of the card when not expanded
           * shows the title and the rows when expanded
           */}
          <Header expanded={expanded} onClick={() => setExpanded(!expanded)} />

          {/* displat the card contents only when expanded is true */}
          {expanded && (
            <div className="p-6">
              <div className="mb-3 text-base leading-relaxed text-blueGray-500">
                <Row title="awesome" />
                <Row title="awesome" />
                <Row title="awesome" />
                <Row title="awesome" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
