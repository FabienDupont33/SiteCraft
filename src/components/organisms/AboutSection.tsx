// /src/components/organisms/AboutSection.tsx.tsx

import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import aboutStyles from '../../styles/aboutStyles';

const AboutSection: React.FC = () => {
  return (
    <section id="about" style={{ position: 'relative' }}>
      <Box sx={aboutStyles.section}>
        <Container maxWidth="md">
          <Box sx={aboutStyles.content}>
            <Avatar
              alt="Fabien Dupont"
              src="/assets/images/avatar.jpg"
              sx={aboutStyles.avatar}
            />
            <Box>
              <Typography variant="h4" gutterBottom sx={aboutStyles.title}>
                À propos de moi
              </Typography>
              <Typography variant="body1" sx={aboutStyles.text}>
                Développeur passionné, j'accompagne mes clients dans la création
                de sites web modernes, sur mesure, et pensés pour répondre à
                leurs besoins spécifiques. Mon objectif : allier esthétique,
                performance et expérience utilisateur.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default AboutSection;
