import React from "react";

const Navbar = () => {
  return (
    <div className="items-center w-auto bg-purple-600">
      <div className="items-center justify-between w-full px-5 overflow-y-auto tflex whitespace-nowrap scroll-hidden ">
        <div className="flex flex-row flex-wrap mx-auto md:items-center md:flex-row">
          <a href="/" className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <h2 className="block p-2 text-xl font-bold tracking-tighter text-white transition transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                caMicroScope Admin
              </h2>
            </div>
          </a>

          <button className="w-auto px-5 py-1 my-2 ml-auto text-base font-normal border rounded-md text-white hover:bg-white hover:text-black duration-500 ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
