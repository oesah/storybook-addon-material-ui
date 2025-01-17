import React from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

import withChannel from "../adk/WithChannel";
import { EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK } from "../config";

const currentTheme = (data) => {
  try {
    const theme = data.themes[data.themeInd];
    return createTheme(theme);
  } catch (err) {
    return createTheme({});
  }
};

const MuiDecorator = ({ data, story }) => (
  <ThemeProvider theme={currentTheme(data)}>
    <div>{story}</div>
  </ThemeProvider>
);

export default withChannel({ EVENT_ID_INIT, EVENT_ID_DATA, EVENT_ID_BACK })(
  MuiDecorator
);
