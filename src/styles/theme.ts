// /src/styles/theme.ts
import { createTheme } from '@mui/material/styles';
import { globalStyles } from './globalStyles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Exemple de couleur pour le thème
    },
    secondary: {
      main: '#388E3C',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: globalStyles.link.color,
          color: '#fff',
          '&:hover': {
            backgroundColor: globalStyles.link['&:hover'].color,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: globalStyles.link.color,
          textDecoration: globalStyles.link.textDecoration,
          '&:hover': {
            color: globalStyles.link['&:hover'].color,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          width: '100%', // Assurer que html prend toute la largeur
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          width: '100%', // Assurer que body prend toute la largeur
        },
        '#root': {
          height: '100%',
          width: '100%', // S'assurer que #root prend toute la largeur
        },
      },
    },
  },
});

export default theme;
