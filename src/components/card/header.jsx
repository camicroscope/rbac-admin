import React from "react";

/**
 * This is the hedder component to serve as the top of the card.
 */
export const Header = ({ expanded, roles, title }) => {
  return (
    <div className="w-full cursor-pointer mx-auto bg-purple-500 border rounded-md px-5 py-2 text-white ">
      <div>
        <div className="flex flex-row flex-wrap">
          <div className="font-bold w-1/6">{title}</div>

          {/* display the roles only when the card is expanded, i.e. expanded = true */}
          {expanded &&
            roles.map((role) => <div className="ml-auto">{role}</div>)}
        </div>
      </div>
    </div>
  );
};
