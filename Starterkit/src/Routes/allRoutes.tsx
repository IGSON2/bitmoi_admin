import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

// Auth
import Login from "pages/Authentication/login";
import Logout from "pages/Authentication/Logout";
import UserProfile from "pages/Authentication/user-profile";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import SignUp from "pages/Authentication/Register";
import DashboardInvest from "pages/Dashboard-invest";
import DashboardReferral from "pages/Dashboard-referral";
import DashboardToken from "pages/Dashboard-token";
import DashboardUsdp from "pages/Dashboard-usdp";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard-invest", component: <DashboardInvest /> },
  { path: "/dashboard-referral", component: <DashboardReferral /> },
  { path: "/dashboard-token", component: <DashboardToken /> },
  { path: "/dashboard-usdp", component: <DashboardUsdp /> },
  { path: "/profile", component: <UserProfile /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/logout", component: <Logout /> },
  { path: "/forgot-password", component: <ForgotPassword /> },
  { path: "/register", component: <SignUp /> },
];
export { authProtectedRoutes, publicRoutes };
