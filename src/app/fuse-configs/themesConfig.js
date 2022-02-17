import { fuseDark, skyBlue } from "@fuse/colors";
import { lightBlue, red } from "@mui/material/colors";

const lightText = {
  primary: "rgb(17, 24, 39)",
  secondary: "rgb(107, 114, 128)",
  disabled: "rgb(149, 156, 169)",
};

const darkText = {
  primary: "rgb(255,255,255)",
  secondary: "rgb(229, 231, 235)",
  disabled: "rgb(156, 163, 175)",
};

const themesConfig = {
  default: {
    palette: {
      mode: "dark",
      text: darkText,
      primary: {
        light: '#CECADF',
        main: '#5A4E93',
        dark: '#2E2564',
      },
      secondary: {
        light: '#B3EBD6',
        main: '#00BC77',
        dark: '#009747',
        contrastText: '#FFFFFF',
      },
      background: {
        paper: '#22184B',
        default: '#180F3D',
      },
      error: red,
    },
    status: {
      danger: "orange",
    },
  },
  defaultDark: {
    palette: {
      mode: "dark",
      text: darkText,
      primary: fuseDark,
      secondary: {
        light: skyBlue[100],
        main: skyBlue[500],
        dark: skyBlue[900],
      },
      background: {
        paper: "#1E2125",
        default: "#121212",
      },
      error: red,
    },
    status: {
      danger: "orange",
    },
  },
  legacy: {
    palette: {
      mode: "light",
      text: lightText,
      primary: fuseDark,
      secondary: {
        light: lightBlue[400],
        main: lightBlue[600],
        dark: lightBlue[700],
      },
      background: {
        paper: "#FFFFFF",
        default: "#F7F7F7",
      },
      error: red,
    },
    status: {
      danger: "orange",
    },
  },
  
};

export default themesConfig;
