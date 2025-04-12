import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import servicesStyles from '../../styles/servicesStyles';

const services = [
  {
    title: 'Écoute & Conseil',
    description:
      'Un accompagnement personnalisé pour comprendre vos besoins et vous orienter vers les meilleures solutions.',
  },
  {
    title: 'Solutions Sur-Mesure',
    description:
      'Chaque projet est unique : je conçois des sites adaptés à vos envies, vos objectifs et votre identité.',
  },
  {
    title: 'Souplesse & Réactivité',
    description:
      'Une approche agile qui me permet d’ajuster rapidement le projet selon vos retours et vos priorités.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" style={{ position: 'relative' }}>
      <Box sx={servicesStyles.section}>
        <Typography variant="h4" sx={servicesStyles.title}>
          Nos Services
        </Typography>
        <Grid container spacing={4} sx={servicesStyles.gridContainer}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper elevation={3} sx={servicesStyles.card}>
                <Typography variant="h6" sx={servicesStyles.cardTitle}>
                  {service.title}
                </Typography>
                <Typography variant="body1" sx={servicesStyles.cardText}>
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default ServicesSection;
