import ErrorPage from "@Pages/ErrorPage";
import { LayoutPage } from "@Pages/Layout";
import PropertyPage from "@Pages/property/PropertyPage";
import React from "react";
import { loader as listingLoader } from "@Data/loaders/listing"; // Import the LoaderFunction type
import { loader as rootLoader } from "@Data/loaders/root";
import { createBrowserRouter } from "react-router-dom";

type ParamsPayload = {
  params: {
    listingId: string;
  };
};

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
        loader: listingLoader,
      },
    ],
  },
]);

export default AppRoutes;
