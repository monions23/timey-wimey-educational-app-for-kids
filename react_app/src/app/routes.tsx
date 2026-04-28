import { createBrowserRouter, Navigate } from "react-router";
import Home from "./pages/Home";
import Space from "./pages/Space";
import Planet from "./pages/Planet";
import Timeline from "./pages/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, Component: Home },
      { path: "space", Component: Space },
      { path: "planet/:planetId", Component: Planet },
      { path: "timeline", Component: Timeline },
      { path: "timeline/:section", element: <Navigate to="/timeline?event=0" replace /> },
      { path: "event/:eventId", element: <Navigate to="/timeline?event=0" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
