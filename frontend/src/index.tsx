import Root from "./routes/Root";
import { AuthProvider } from "./services/auth/AuthContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import NotificationSetting from "./pages/AccountSettings/NotificationSetting";
import ProfilePage from "./pages/AccountSettings/AccountSettingsPage";
import ProfileSetting from "./pages/AccountSettings/ProfileSetting";
import RecomendationSetting from "./pages/AccountSettings/RecomendationSetting";
import RecomendationPage from "./pages/Recomendation/RecomendationPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import StyleDemonstration from "./pages/StyleDemonstration/StyleDemonstration";
import weatherFetcher from "./services/impl/WeatherFetcher";
import DashboardPage from "./pages/Dashboard/DashboardPage";

weatherFetcher.fetchCurrentWeatherPeriodicaly();
const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
        children: [
          {
            path: "", // This will match "/profile"
            element: <ProfileSetting />,
          },
          {
            path: "notificationsettings", // This will match "/profile/notificationSettings"
            element: <NotificationSetting />,
          },
          {
            path: "recomendationsettings", // This will match "/profile/notificationSettings"
            element: <RecomendationSetting />,
          },
        ],
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "style_demonstration",
        element: <StyleDemonstration />,
      },
      {
        path: "recommendation",
        element: <RecomendationPage />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//reportWebVitals();
