import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';
import { CssBaseline } from '@mui/material';
import 'simplebar-react/dist/simplebar.min.css';


const MyApp = ({ Component, pageProps }) => {

  const theme = createTheme();

  // ?? 运算符的作用是判断一个值是否为 null 或 undefined。如果该值为 null 或 undefined，那么返回一个默认值，否则返回该值本身。
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  </>

}

export default MyApp

