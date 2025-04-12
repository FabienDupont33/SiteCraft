// /src/App.tsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Header from './components/organisms/Header';
import HeroSection from './components/organisms/HeroSection';
import ServicesSection from './components/organisms/ServicesSection';
import Footer from './components/organisms/Footer';
import AboutSection from './components/organisms/AboutSection';
import ContactPage from './components/pages/ContactPage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// Composant pour gérer le scroll automatique
const ScrollToAnchor = () => {
  const location = useLocation();

  useEffect(() => {
    // Si l'URL contient un hash, on fait défiler jusqu'à la section correspondante
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>FD Web Développement - Accueil</title>
      </Helmet>
      <Router basename="/SiteCraft/">
        <ThemeProvider theme={theme}>
          <Header />
          <ScrollToAnchor />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ServicesSection />
                  <AboutSection />
                </>
              }
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
