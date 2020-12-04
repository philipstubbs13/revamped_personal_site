import { createMuiTheme } from '@material-ui/core/styles';

// https://www.schemecolor.com/tiktok.php

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#010101',
    },
    secondary: {
      main: '#69C9D0',
      dark: '#EE1D52',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#010101',
      secondary: '#FFFFFF',
    },
  },
});
