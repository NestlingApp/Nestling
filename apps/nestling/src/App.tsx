import { NextUIProvider } from "@nextui-org/react";
import React from "react";

import "./App.css";
import PropertyPage from "@Pages/property/PropertyPage";

const App = () => {
  return (
    <NextUIProvider>
      <div className="App">
        <PropertyPage />
      </div>
    </NextUIProvider>
  );
};

export default App;
