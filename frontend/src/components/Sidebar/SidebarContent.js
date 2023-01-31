import React from "react";
import "../../App.css";
import { Link, Route, Routes } from "react-router-dom";
import routes from "../../routes/sidebar";
import { NavLink } from "react-router-dom";
import * as Icons from "../../icons";
import SidebarSubmenu from "./SidebarSubmenu";
import { useSelector } from "react-redux";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function SidebarContent() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
        href="/"
      >
        Iodump
      </a>
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Routes>
                  <Route
                    path={route.path}
                    exact={route.exact}
                    render={() => (
                      <span
                        className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                        aria-hidden="true"
                      ></span>
                    )}
                  />
                </Routes>
                <Icon
                  className="w-5 h-5"
                  aria-hidden="true"
                  icon={route.icon}
                />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      {user.role === "user" && (
        <div className="px-6 my-6">
          <Link
            className="bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-all ease-in duration-100 focus:border-blue-700"
            to="/login"
          >
            Member Login
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SidebarContent;
