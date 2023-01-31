import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
const Page404 = lazy(() => import("./pages/404"));
const Logout = lazy(() => import("./pages/Logout"));
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Routes>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route exact path="/app" element={<ProtectedRoute isAdmin={false} />}>
            <Route path="/app/:tag?" element={<Layout />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
