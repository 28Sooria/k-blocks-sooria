import React, { useRef, useState } from 'react';
import { AppBar, Box, Grid, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Assests/logo.jpg'
import banner from '../Assests/banner.png';
import About from './About';
import ContactUs from './ContactUs'
import KBlocks from './Kblocks';
import BlueMetals from './BlueMetals';
import ReadyMix from './ReadyMix';
const Home = () => {
  const aboutRef = useRef(null);
  const kBlocksRef = useRef(null);
  const blueMetalsRef = useRef(null);
  const contactRef = useRef(null);
  const readyMixRef = useRef(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setDrawerOpen(false); // Close drawer on navigation
  };

  const navItems = [
    { label: "HOME", onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { label: "ABOUT US", onClick: () => handleScroll(aboutRef) },
    { label: "K BLOCKS", onClick: () => handleScroll(kBlocksRef) },
    { label: "BLUE METALS", onClick: () => handleScroll(blueMetalsRef) },
    { label: "READY MIX", onClick: () => handleScroll(readyMixRef) },
    { label: "CONTACT US", onClick: () => handleScroll(contactRef) },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* Navbar */}
        <AppBar
          position="static"
          sx={{
            width: "100%",
            height: "100px",
            borderBottom: "1px solid #E5F1FF",
            background: "white",
            boxShadow: "0px 0px 4px 0px #E5F1FF",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
  <img
    src={logo}
    alt="logo"
    style={{
      width: "100%", // Default to 100% for responsiveness
      maxWidth: "200px", // Max size for larger screens
      height: "100px", // Ensure aspect ratio is maintained
    }}
  />
</Box>


            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: "24px", alignItems: "center" }}>
              {navItems.map((item, index) => (
                <Typography
                  key={index}
                  onClick={item.onClick}
                  sx={{
                    position: "relative",
                    color: "#5C6066",
                    fontWeight: 400,
                    fontSize: '12px',
                    textTransform: "uppercase",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#FEA515",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "#5C6066",
                      bottom: "-4px",
                      left: 0,
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>

            {/* Mobile Navigation - Hamburger Icon */}
            <IconButton
              edge="start"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Drawer for Mobile Navigation */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              {navItems.map((item, index) => (
                <ListItem button key={index} onClick={item.onClick}>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* Banner */}
        <img
          src={banner}
          alt="banner"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </Grid>

      {/* About Section */}
      <Grid item xs={12} ref={aboutRef} >
        <About />
      </Grid>
      {/* ReadyMix Section */}
      <Grid item xs={12} ref={readyMixRef} sx={{ mt: 5, padding: 2 }}>
       <ReadyMix/>
      </Grid>

      {/* K Blocks Section */}
      <Grid item xs={12} ref={kBlocksRef} sx={{ mt: 5, padding: 2 }}>
       <KBlocks/>
        
      </Grid>

      {/* Blue Metals Section */}
      <Grid item xs={12} ref={blueMetalsRef} sx={{ mt: 5, padding: 2 }}>
       <BlueMetals/>
      </Grid>
     
      <Grid item xs={12} ref={contactRef} sx={{ mt: 5, padding: 2 }}>
       <ContactUs/>
      </Grid>
    </Grid>
  );
};

export default Home;
