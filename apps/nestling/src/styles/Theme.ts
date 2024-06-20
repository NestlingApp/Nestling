import { createTheme } from "@mui/material";

export const palette =  { primary: { main: "#683fb5" } }

const theme = createTheme({
    palette:palette,

    typography: {
      subtitle1: {
        fontSize: 12,
      },
      subtitle2: {

      },
      body1: {
        fontWeight: 500,
      },
 
    },
  });

  

  export default theme