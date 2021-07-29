import React from "react";

/**
 * This is the hedder component to serve as the top of the card.
 */
export const Header = ({ expanded }) => {
  console.log(expanded);

  return (
    <div className="w-full cursor-pointer mx-auto bg-purple-500 border rounded-md px-5 py-2 text-white ">
      <div>
        <div className="flex flex-row flex-wrap">
          <div className="font-bold">Attribute Type</div>

          {/* display the roles only when the card is expanded, i.e. expanded = true */}
          {expanded && (
            <>
              <div className="ml-auto">Admin</div>
              <div className="ml-auto">Moderator</div>
              <div className="ml-auto">Editor</div>
              <div className="ml-auto">Teacher</div>
              <div className="ml-auto">Student</div>
              <div className="ml-auto">Visitor</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
