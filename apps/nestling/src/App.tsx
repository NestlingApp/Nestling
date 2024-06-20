import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Theme";
import React from "react";
import AppRoutes from "./AppRoutes";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const App = () => {
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
