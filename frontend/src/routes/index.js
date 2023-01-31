import { lazy } from "react";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Carrom = lazy(() => import("../containers/Carrom/Carrom"));
const Forms = lazy(() => import("../pages/Forms"));
const Timeline = lazy(() => import("../pages/Timeline"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));

const routes = [
  {
    path: "dashboard",
    component: Dashboard,
  },
  {
    path: "forms",
    component: Forms,
  },
  {
    path: "timeline",
    component: Timeline,
  },

  {
    path: "modals",
    component: Modals,
  },
  {
    path: "tables",
    component: Tables,
  },
  {
    path: "404",
    component: Page404,
  },
  {
    path: "carrom",
    component: Carrom,
  },
];

export default routes;
