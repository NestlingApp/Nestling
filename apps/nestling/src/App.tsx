import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider as ReduxProvider } from "react-redux";
import theme from "./styles/Theme";
import React from "react";
import AppRoutes from "./AppRoutes";
import { store } from "./store";

import "./App.css";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <RouterProvider router={AppRoutes} />
          </div>
        </ThemeProvider>
      </ReduxProvider>
    </StyledEngineProvider>
  );
};

export default App;
