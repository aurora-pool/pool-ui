import PoolStats from "views/PoolStats.jsx";
import GlobalStats from "views/GlobalStats.jsx";
import { Dashboard } from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Pool Stats",
    navbarName: "",
    icon: Dashboard,
    component: PoolStats,
    statsType: "pool:stats"
  },
  {
    path: "/global",
    sidebarName: "Global Stats",
    navbarName: "",
    icon: Dashboard,
    component: GlobalStats,
    statsType: "global:stats"
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
