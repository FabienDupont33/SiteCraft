// /src/components/organisms/Header.tsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Pour la navigation interne
import headerStyles from '../../styles/headerStyles';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Accueil', href: '/#hero' }, // Lien vers la page d'accueil (et ancre #hero)
    { label: 'Services', href: '/#services' },
    { label: 'À propos', href: '/#about' },
    { label: 'Contact', href: '/contact' }, // Lien vers la page Contact
  ];

  return (
    <AppBar position="fixed" sx={headerStyles.appBar}>
      <Toolbar sx={headerStyles.toolbar}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="images/logo.png"
            alt="Logo FD Web Développement"
            style={{ height: 80 }} // tu peux ajuster la taille
          />
        </Link>
        <Typography variant="h6" sx={headerStyles.typography}>
          FD Web Développement
        </Typography>
        {/* Menu mobile */}
        <Box sx={headerStyles.mobileMenu}>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleMenuClick}
            sx={headerStyles.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={handleMenuClose}>
                {/* Utilisation de Link pour éviter un rechargement de page */}
                <Link to={item.href}>{item.label}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Liens desktop */}
        <Box sx={headerStyles.desktopMenu}>
          {menuItems.map((item) => (
            <Link key={item.label} to={item.href}>
              <Button color="inherit" sx={headerStyles.button}>
                {item.label}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
