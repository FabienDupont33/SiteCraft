// /src/components/pages/ContactPage.tsx

import React from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import contactStyles from '../../styles/contactStyles';

const ContactPage: React.FC = () => {
  return (
    <Box sx={contactStyles.section}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom sx={contactStyles.title}>
          Me contacter
        </Typography>
        <Typography variant="body1" sx={contactStyles.subtitle}>
          Une idée ? Un besoin ? N’hésitez pas à me laisser un message.
        </Typography>

        <Box component="form" sx={contactStyles.form}>
          <TextField fullWidth label="Nom" variant="outlined" margin="normal" />
          <TextField
            fullWidth
            label="Adresse e-mail"
            variant="outlined"
            margin="normal"
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" sx={contactStyles.button}>
            Envoyer
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
