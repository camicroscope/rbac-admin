import React from 'react';
/** import useLocation as a hook from react-router-dom */
import { Link } from 'react-router-dom';

export const Navbar = () => (
  <div className="items-center w-auto bg-purple-600 shadow-md">
    <div className="items-center justify-between w-full px-5 overflow-y-auto tflex whitespace-nowrap scroll-hidden ">
      <div className="flex flex-row flex-wrap mx-auto md:items-center md:flex-row">
        <Link to="/">
          <div className="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
            <div className="inline-flex items-center">
              <h2 className="block p-2 text-xl font-bold tracking-tighter text-white transition transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8">
                caMicroScope Admin
              </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);
