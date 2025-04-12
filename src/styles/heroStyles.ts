import { SxProps, Theme } from '@mui/system';

const heroStyles: { [key: string]: SxProps<Theme> } = {
  root: {
    minHeight: '90vh',
    backgroundImage: `url('/images/code-nature.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // assombrit l’image
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
      animation: 'bubble 15s linear infinite',
      zIndex: 1,
    },
    '@keyframes bubble': {
      from: { backgroundPosition: '0 0' },
      to: { backgroundPosition: '100px 100px' },
    },
  },
  container: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#C8E6C9',
    mb: 2,
  },
  subtitle: {
    color: '#A5D6A7',
    mb: 4,
  },
  cta: {
    backgroundColor: '#66BB6A',
    '&:hover': {
      backgroundColor: '#4CAF50',
    },
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 1,
  },
};

export default heroStyles;
