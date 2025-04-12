// /src/components/organisms/Footer.tsx

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import footerStyles from '../../styles/footerStyles';

const Footer: React.FC = () => {
  return (
    <Box sx={footerStyles.container}>
      <Typography variant="body1">© 2025 FD Web Développement</Typography>
      <div>
        <Link sx={footerStyles.link} href="#">
          Politique de confidentialité
        </Link>
        <Link sx={footerStyles.link} href="#">
          Conditions d'utilisation
        </Link>
        <Link sx={footerStyles.link} href="#">
          Mentions légales
        </Link>
      </div>
    </Box>
  );
};

export default Footer;
