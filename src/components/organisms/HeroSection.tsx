// /src/components/organisms/HeroSection.tsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import heroStyles from '../../styles/heroStyles';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ position: 'relative' }}>
      <Box sx={heroStyles.root}>
        <Container maxWidth="lg" sx={heroStyles.container}>
          <Typography variant="h2" component="h1" sx={heroStyles.title}>
            Créateur de sites web sur mesure
          </Typography>
          <Typography variant="h5" sx={heroStyles.subtitle}>
            Des interfaces modernes, rapides et responsives pour propulser votre
            activité en ligne.
          </Typography>
          <Button variant="contained" color="primary">
            Me contacter
          </Button>
        </Container>
        <Box component="svg" viewBox="0 0 1440 320" sx={heroStyles.wave}>
          <path
            fill="#e8f5e9"
            fillOpacity="1"
            d="M0,224L60,192C120,160,240,96,360,96C480,96,600,160,720,160C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </Box>
      </Box>
    </section>
  );
};

export default HeroSection;
