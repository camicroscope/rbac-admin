import React from "react";

/** import peer components */
import { CheckBox } from "./checkbox";

export const Row = ({ title }) => {
  return (
    <section>
      {/** add 3 evenly spaced CheckBox components using flex **/}
      <div className="flex flex-row flex-wrap">
        <div className="font-normal">Attribute Type</div>
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    </section>
  );
};
