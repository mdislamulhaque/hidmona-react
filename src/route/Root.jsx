import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import OtpPage from "../pages/otp/OtpPage";
import SendMoney from "../pages/dashboard/SendMoney";
import Profile from "../pages/dashboard/Profile";
import Transaction from "../pages/dashboard/Transaction";
import DashboardLayout from "../layout/DashboardLayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/otp",
        element: <OtpPage />,
      },
      {
        path: "/*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <SendMoney/>
      },
      {
        path: "profile",
        element: <Profile/>
      },
      {
        path: "transaction",
        element: <Transaction />
      },
    ],
  },
]);

export default router;
