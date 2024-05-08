import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import Root from "./routes/Root";
import RecomendationPage from "./pages/Recomendation/RecomendationPage";
import { AuthProvider } from "./services/auth/AuthContext";
import StyleDemonstration from "./pages/StyleDemonstration/StyleDemonstration";

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
      },
      {
        path: "recomendation",
        element: <RecomendationPage />,
      },
      {
        path: "style_demonstration",
        element: <StyleDemonstration />,
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
