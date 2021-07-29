import React from "react";

export const CheckBox = ({ active }) => {
  return (
    <div className="ml-auto  ">
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={active}
        onChange={() => {}}
      />
    </div>
  );
};
