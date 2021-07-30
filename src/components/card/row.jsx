import React from "react";

/** import peer components */
import { CheckBox } from "./checkbox";

export const Row = ({ title }) => {
  return (
    <section className="hover:bg-purple-100 duration-100 rounded-md">
      {/** add 3 evenly spaced CheckBox components using flex **/}
      <div className="flex flex-row flex-wrap px-6">
        <div className="font-normal cursor-default w-1/6">{title}</div>
        <CheckBox />
        <CheckBox />
        <CheckBox />
      </div>
    </section>
  );
};
