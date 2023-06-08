import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
