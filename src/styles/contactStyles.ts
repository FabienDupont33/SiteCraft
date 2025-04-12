// /src/styles/contactStyles.ts

import { SxProps, Theme } from '@mui/system';

const contactStyles: { [key: string]: SxProps<Theme> } = {
  section: {
    backgroundColor: '#f0fdf4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centrer verticalement
    alignItems: 'center', // Centrer horizontalement
    height: '100vh', // Prendre toute la hauteur de l'écran
    width: '100%', // Prendre toute la largeur
    padding: '40px 0',
    boxSizing: 'border-box', // S'assurer que les paddings ne dépassent pas la largeur
  },
  title: {
    color: '#2e7d32',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1.2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '600px', // Limiter la largeur du formulaire
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#4caf50',
    '&:hover': {
      backgroundColor: '#388e3c',
    },
    padding: '10px 20px',
    fontSize: '1.1rem',
  },
};

export default contactStyles;
