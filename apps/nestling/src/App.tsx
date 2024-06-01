import SnackbarProvider from "react-simple-snackbar";
import { StyledEngineProvider } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import "./App.css";
import PropertyPage from "@Pages/property/PropertyPage";

const App = () => {
  const theme = createTheme({
    palette: { primary: { main: "#683fb5" } },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <div className="App">
            <PropertyPage />
          </div>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
