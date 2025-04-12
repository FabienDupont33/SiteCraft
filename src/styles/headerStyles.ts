// /src/styles/headerStyles.js
import { SxProps, Theme } from '@mui/system';

const headerStyles: { [key: string]: SxProps<Theme> } = {
  appBar: {
    backgroundColor: '#2e7d32', // vert forêt
    color: '#ffffff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    zIndex: 1300,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 2,
    py: 1,
  },
  typography: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  button: {
    color: '#ffffff',
    mx: 1,
    '&:hover': {
      backgroundColor: '#388e3c',
    },
  },
  menuButton: {
    display: { xs: 'block', md: 'none' },
  },
  mobileMenu: {
    display: { xs: 'block', md: 'none' },
  },
  desktopMenu: {
    display: { xs: 'none', md: 'flex' },
  },
};

export default headerStyles;
