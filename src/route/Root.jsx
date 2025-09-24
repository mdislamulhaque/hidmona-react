import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Location from "../pages/location/Location";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import OtpPage from "../pages/otp/OtpPage";


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
]);

export default router;
