import { NextUIProvider } from "@nextui-org/react";
import SnackbarProvider from "react-simple-snackbar";
import React from "react";

import "./App.css";
import PropertyPage from "@Pages/property/PropertyPage";

const App = () => {
  return (
    <NextUIProvider>
      <SnackbarProvider>
        <div className="App">
          <PropertyPage />
        </div>
      </SnackbarProvider>
    </NextUIProvider>
  );
};

export default App;
