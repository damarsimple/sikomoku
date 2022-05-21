import { createTheme } from "@mui/material/styles";
import { blue, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green.A700,
    },
    secondary: {
      main: blue.A700,
    },
  },
});

export default theme;
