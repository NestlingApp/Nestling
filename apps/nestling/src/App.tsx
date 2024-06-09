import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import AppRoutes from "./AppRoutes";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const App = () => {
  const theme = createTheme({
    palette: { primary: { main: "#683fb5" } },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <RouterProvider router={AppRoutes} />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
