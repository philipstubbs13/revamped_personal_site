import { createMuiTheme } from '@material-ui/core/styles';

// https://www.schemecolor.com/tiktok.php

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#010101",
    },
    secondary: {
      main: '#69C9D0',
    },
    background: {
      default: '#2a2a2a',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#010101'
    }
  }
})