import { SxProps, Theme } from '@mui/system';

const servicesStyles: { [key: string]: SxProps<Theme> } = {
  section: {
    backgroundColor: '#e8f5e9', // vert clair
    padding: '60px 20px',
    textAlign: 'center',
  },
  title: {
    color: '#2e7d32',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  gridContainer: {
    justifyContent: 'center',
  },
  card: {
    padding: '30px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
    },
  },
  cardTitle: {
    color: '#388e3c',
    fontWeight: 600,
    marginBottom: '12px',
  },
  cardText: {
    color: '#4e4e4e',
  },
};

export default servicesStyles;
