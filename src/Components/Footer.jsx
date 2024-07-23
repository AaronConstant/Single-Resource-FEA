import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TiSocialFacebook } from "react-icons/ti"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialPinterest } from "react-icons/ti"
import { TiSocialInstagram } from "react-icons/ti"
import '../Styles/footer.scss'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      {new Date().getFullYear()}
      {', AM Herbalog. All rights reserved.'}
    </Typography>
  )
}

const defaultTheme = createTheme();


export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CssBaseline />
     
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
              Subscribe to our Newsletter.
            <Copyright/>
            <TiSocialFacebook className='footer_socialmedia'/>
            <TiSocialTwitter className='footer_socialmedia'/>
            <TiSocialPinterest className='footer_socialmedia'/>
            <TiSocialInstagram className='footer_socialmedia'/>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}