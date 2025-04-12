import { SxProps, Theme } from '@mui/system';

const aboutStyles: { [key: string]: SxProps<Theme> } = {
  section: {
    backgroundColor: '#f0fdf4',
    padding: '60px 0',
  },
  content: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: 'center',
    gap: '20px',
  },
  avatar: {
    width: 120,
    height: 120,
    boxShadow: 3,
  },
  title: {
    color: '#2e7d32',
    fontWeight: 'bold',
  },
  text: {
    color: '#333',
    marginTop: '10px',
    lineHeight: 1.6,
  },
};

export default aboutStyles;
