import { Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

// Auth
import Login from "pages/Authentication/login";
import Logout from "pages/Authentication/Logout";
import UserProfile from "pages/Authentication/user-profile";
import ForgotPassword from "pages/Authentication/ForgotPassword";
import SignUp from "pages/Authentication/Register";
import DashboardScoresPrac from "pages/Dashboard-scores/scores-prac";
import DashboardUsdpRead from "pages/Dashboard-usdp/Usdp-read";
import DashboardScoresComp from "pages/Dashboard-scores/scores-comp";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard-scores/prac", component: <DashboardScoresPrac /> },
  { path: "/dashboard-scores/comp", component: <DashboardScoresComp /> },
  { path: "/dashboard-usdp/read", component: <DashboardUsdpRead /> },
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
