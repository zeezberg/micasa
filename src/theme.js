const { createTheme } = require("@mui/material");

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#F4F4F4",
    },
  },

  fonts: { montserrat: "Montserrat, sans-serif" },
});
export default theme;
