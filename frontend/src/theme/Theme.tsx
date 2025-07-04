import { createTheme } from '@mui/material/styles';
const commonSettings = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  custom: {
    maxWidth: 720, // custom property for max width
  },
};
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6272A4' },   
    secondary: { main: '#F1FA8C' }, 
  },
  ...commonSettings,
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#80cbc4' },   // lighter teal
    secondary: { main: '#ffb74d' }, // lighter orange
  },
  ...commonSettings,
});