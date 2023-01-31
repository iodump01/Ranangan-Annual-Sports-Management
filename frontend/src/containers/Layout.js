import React, { useContext, Suspense, useEffect, lazy } from "react";
import { useLocation, useParams } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import Forms from "../pages/Forms";

function Layout() {
  const Dashboard = lazy(() => import("../pages/Timeline"));
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();
  const { tag } = useParams();

  useEffect(() => {
    closeSidebar();
  }, [location, closeSidebar]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />
      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ThemedSuspense />}>
            {routes.map((route) =>
              tag === route.path ? <route.component /> : ""
            )}
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
