import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import contactStyles from '../../styles/contactStyles';

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contact depuis le site de FD Web Développement`
    );
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    );

    window.location.href = `mailto:fabien.dupont33@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact - FD Web Développement</title>
      </Helmet>
      <Box sx={contactStyles.section}>
        <Container maxWidth="sm">
          <Typography variant="h4" gutterBottom sx={contactStyles.title}>
            Me contacter
          </Typography>
          <Typography variant="body1" sx={contactStyles.subtitle}>
            Une idée ? Un besoin ? N’hésitez pas à me laisser un message.
          </Typography>

          <Box component="form" sx={contactStyles.form} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nom"
              name="name"
              value={form.name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Adresse e-mail"
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={contactStyles.button}
            >
              Envoyer
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactPage;
