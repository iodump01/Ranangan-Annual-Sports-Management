import React, { useContext, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import Forms from "../pages/Forms";

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();

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
            <Routes>
              {routes.map(
                (route, i) =>
                  route.component && (
                    <Route
                      key={i}
                      exact={true}
                      path={`/app${route.path}`}
                      render={(props) => <route.component {...props} />}
                    />
                  )
              )}
              <Route
                from="/app"
                element={<Navigate to="/app/dashboard" replace />}
              />
              {/* <Navigate exact from="/app" to="/app/dashboard" /> */}
              {/* <Route element={<ThemedSuspense />} /> */}
            </Routes>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
