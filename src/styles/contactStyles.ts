import { SxProps, Theme } from '@mui/system';

const contactStyles: { [key: string]: SxProps<Theme> } = {
  section: {
    backgroundColor: '#f0fdf4',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    padding: { xs: '20px', sm: '40px 0' },
    boxSizing: 'border-box',
  },
  title: {
    color: '#2e7d32',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: { xs: '2rem', sm: '2.5rem' },
    marginBottom: '10px',
  },
  subtitle: {
    color: '#4caf50',
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: { xs: '1rem', sm: '1.2rem' },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
    maxWidth: '600px',
    padding: { xs: '16px', sm: '20px' },
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
    width: { xs: '100%', sm: 'auto' }, // bouton fluide sur mobile
  },
};

export default contactStyles;
