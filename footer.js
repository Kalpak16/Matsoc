import React from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0d2538', color: 'white', pt: 4, pb: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/resources">Resources</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Grid>

        {/* Social Media */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box className="social-icons">
            <IconButton href="https://facebook.com" target="_blank" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Material Society, IIT Kanpur</Typography>
          <Typography variant="body2">Kanpur, Uttar Pradesh, India</Typography>
          <Typography variant="body2">Email: materialsociety@iitk.ac.in</Typography>
          <Typography variant="body2">Phone: +91-1234567890</Typography>
        </Grid>

        {/* Subscribe */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Subscribe
          </Typography>
          <Typography variant="body2" gutterBottom>
            Get updates on our latest events and resources.
          </Typography>
          <Box component="form" noValidate>
            <TextField 
              variant="outlined" 
              size="small" 
              placeholder="Enter your email" 
              fullWidth
              InputProps={{
                sx: { bgcolor: 'white', borderRadius: '4px' }
              }}
            />
            <Button 
              variant="contained" 
              sx={{ mt: 1, bgcolor: '#ff7043', '&:hover': { bgcolor: '#ff5722' } }}
              fullWidth
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 4, pt: 2, borderTop: '1px solid #ffffff33' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Material Society, IIT Kanpur. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
