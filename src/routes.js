import React from "react";

import MainLayout from "src/layouts/MainLayout";

import Projects from "src/views/projects";
import Settings from "src/views/settings";

import LandingPage from "src/views/landingPage/LandingPage";

//import SettingsView from "src/views/settings/SettingsView";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "loadProduct", element: <Settings /> },
      { path: "ViewProduct", element: <Projects /> },
    ],
  },
];

export default routes;
