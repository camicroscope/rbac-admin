import React from "react";

/**
 * This is the hedder component to serve as the top of the card.
 */
export const Header = () => {
  return (
    <div className="w-full mx-auto bg-purple-500 border rounded-md px-5 py-2 text-white ">
      <div>
        <div className="flex flex-row flex-wrap">
          <div className="font-bold">Attribute Type</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
          <div className="ml-auto">Admin</div>
        </div>
      </div>
    </div>
  );
};
