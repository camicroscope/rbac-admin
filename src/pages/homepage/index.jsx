/** import react and other dependencies **/
import React from "react";
import { Link } from "react-router-dom";

/**
 * Homepage shows the title and the sub-title for the page
 *
 * the components are styled using tailwind css
 */
export const HomePage = () => {
  return (
    <section className="text-blueGray-700 ">
      <div className="container flex flex-col items-center px-5 py-8 mx-auto">
        <div className="flex flex-col w-full mb-12 text-left lg:text-center">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 mx-auto mb-5 text-black bg-blueGray-100 rounded-full"></div>
          <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:w-1/2 lg:text-3xl title-font">
            caMicroScope
          </h1>
          <Link to="/dashboard">
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-1/2">
              Role Configuration Interface
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
