import '@/styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'


const theme = createTheme({
  palette: {
    primary: {
      light: '#af52bf',
      main: '#9c27b0',
      dark: '#6d1b7b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4569',
      main: '#ff4569',
      dark: '#b2102f',
      contrastText: '#000',
    },
  },
});



export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  
  )
  
  
}
