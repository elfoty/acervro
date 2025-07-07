import { createTheme } from '@mui/material/styles';
import '../global.css';

const commonTextFieldStyles = {
  styleOverrides: {
    root: {
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'inherit',
          borderWidth: 1.5,
        },
        '&:hover fieldset': {
          borderColor: 'primary.main',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'secondary.main',
        },
        // 👇 Estilo do input (incluindo placeholder)
        '& .MuiInputBase-input': {
          color: 'text.primary',
          '&::placeholder': {
            color: 'text.secondary', // Usa a cor secundária do tema
            opacity: 0.8, // Deixa um pouco transparente
          },
        },
      },
      '& .MuiInputLabel-root': {
        color: 'text.secondary',
        '&.Mui-focused': {
          color: 'secondary.main',
        },
      },
    },
  },
};

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontSize: '2rem',
      fontWeight: 1000,
      lineHeight: 1.4,
      fontStyle: 'italic',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 100,
      lineHeight: 1.4,
      fontStyle: 'italic',
      color: '#fff', // dark text for better readability
    },
    p: {
      color: '#303030'
    }
  },
  custom: {
    maxWidth: 720, // custom property for max width
  },
  
};

const commonSettingsDark = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h2: {
      fontSize: '2rem',
      fontWeight: 1000,
      lineHeight: 1.4,
      fontStyle: 'italic',
      fontFamily: 'Roboto, sans-serif',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 100,
      lineHeight: 1.4,
      fontStyle: 'italic',
      color: '#fff', // dark text for better readability
    },
    p: {
      color: '#303030'
    }
  },
  custom: {
    maxWidth: 720, // custom property for max width
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#fff' },
    secondary: { main: '#fff' },
  },
  components: {
    MuiTextField: commonTextFieldStyles,
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: '#fff',
          mixBlendMode: 'overlay',
        },
      },
    },
  },
  ...commonSettings,
});
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#fff' },   // lighter teal
    secondary: { main: '#fff' }, // lighter orange
  },
  components: {
    MuiTextField: commonTextFieldStyles,
    MuiTypography: {
      styleOverrides: {
        h2: {
          color: '#fff',
          mixBlendMode: 'overlay',
        },
      },
    },
  },
  ...commonSettingsDark,
});