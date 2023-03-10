import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';


const MyApp = ({ Component, pageProps }) => {

  const theme = createTheme();

  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>


}

export default MyApp

