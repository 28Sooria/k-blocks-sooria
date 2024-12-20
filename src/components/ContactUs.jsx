import React from 'react';
import { Grid, Box, Typography, Button, TextField, Link } from '@mui/material';
import pdf1 from '../Assests/pdf.pdf';
import Address from '../Assests/Address.png';
import phone from '../Assests/phone.png';
import email from '../Assests/email.png';
import last from '../Assests/map.png';

const ContactUs = () => {
  const mapUrl = 'https://maps.app.goo.gl/di3WpzVc1Jd4Ejq29';
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');
  };

  return (
    <Grid container>
      {/* First Section */}
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ width: "95%", backgroundColor: "#EEEEEE" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 10 },
              py: 2,
              height: '170px',
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: { xs: "16px", sm: "20px" },
                color: "#7E8082",
                textAlign: "center",
              }}
            >
              CLICK HERE TO VIEW OUR PRODUCTS PORTFOLIO
            </Typography>
            <Button
  variant="contained"
  sx={{
    backgroundColor: "#FEA515",
    "&:hover": {
      backgroundColor: "#FEA515",
    },
    width: { xs: "50%", sm: "auto" }, // 100% width on mobile
    fontSize: { xs: "14px", sm: "inherit" },
    padding: { xs: "12px", sm: "8px 16px" },
  }}
>
  <a
    href={pdf1}
    download
    style={{
      textDecoration: "none",
      color: "white",
      fontWeight: "bold",
    }}
  >
    DOWNLOAD
  </a>
</Button>


          </Box>

          {/* Contact Info Section */}
          <Box
            sx={{
              width: "100%",
              height: '330px',
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "white",
              gap: 2,
              py: 2,
            }}
          >
            {[
              { img: Address, title: "Address Details", details: "Kannan Blue Metals, Murugantholuvu, Chennimalai, TamilNadu 638051" },
              { img: email, title: "EMAIL", details: "info@kipipl.com" },
              { img: phone, title: "CALL US", details: "+91 98428 30590 | 99425 30590" },
            ].map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: { xs: "100%", sm: "auto" },
                  textAlign: { xs: "center", sm: "left" },
                  backgroundColor: "#F5F5F5",  // Light background for each contact info box
                  padding: 2,  // Adding padding to make the boxes look smaller and spaced
                  borderRadius: 2,  // Optional: gives a rounded corner effect
                }}
              >
                <Box>
                  <img src={info.img} alt={info.title} />
                </Box>
                <Box sx={{ width: "200px" }}> {/* Reduced the width here */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Lato",
                      fontWeight: "700",
                      fontSize: { xs: "16px" },
                      color: "#4B4E53",
                    }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "14px" },
                      color: "#7E8082",
                    }}
                  >
                    {info.details}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Contact Us Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              backgroundColor: "#EEEEEE",
              gap: 4,
              py: 4,
            }}
          >
            {/* Left Image Section */}
            <Box
  sx={{
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.8316471816406!2d77.63352077504781!3d11.181547888992913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba973f15612601b%3A0xb9b7f23dca1abd60!2skannan%20blue%20metals!5e1!3m2!1sen!2sin!4v1732162210601!5m2!1sen!2sin"
    title="Location Map"
    style={{
      width: "100%",
      height: "100%",
      border: "none",
      maxHeight: "100%",
    }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</Box>


            {/* Right Form Section */}
            <Box
              sx={{
                flex: 1,
                backgroundColor: "#EEEEEE",
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#4B4E53",
                  textAlign: "center",
                  mb: 2,
                }}
              >
                Contact Us
              </Typography>
              <form style={{ width: "100%", maxWidth: "400px" }}>
                {["Name", "Email", "Message"].map((label, index) => (
                  <TextField
                    key={index}
                    label={label}
                    variant="standard"
                    margin="normal"
                    fullWidth
                  />
                ))}
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#FEA515",
                    "&:hover": {
                      backgroundColor: "#FEA515",
                    },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Box>

          {/* Footer Section */}
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              backgroundColor: "white",
              py: 2,
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: "11px", color: "#4B4E53" }}>
              2024 © All rights reserved to KIPIPL
            </Typography>
            <Typography sx={{ fontSize: "11px", color: "#4B4E53", mt: 4 }}>
              Developed By{" "}
              <Link
                href="https://cubecorpsolutions.com/"
                sx={{ color: "blue", textDecoration: "underline" }}
              >
                CubeCorpsol
              </Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
