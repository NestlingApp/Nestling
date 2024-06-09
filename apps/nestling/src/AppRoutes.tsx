import ErrorPage from "@Pages/ErrorPage";
import { LayoutPage } from "@Pages/Layout";
import PropertyPage from "@Pages/property/PropertyPage";
import React from "react";
import { loader as listingsLoader } from "@Data/loaders/listings";
import { loader as rootLoader } from "@Data/loaders/root";
import { createBrowserRouter } from "react-router-dom";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    errorElement: <ErrorPage />,
    loader: rootLoader,

    children: [
      {
        path: "listings/:listingId",
        element: <PropertyPage />,
        loader: listingsLoader,
      },
    ],
  },
]);

export default AppRoutes;
