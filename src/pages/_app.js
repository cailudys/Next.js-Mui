import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from 'src/theme';
import { CssBaseline } from '@mui/material';
import 'simplebar-react/dist/simplebar.min.css';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';

const SplashScreen = () => null;

const MyApp = ({ Component, pageProps }) => {

  const theme = createTheme();

  // ?? 运算符的作用是判断一个值是否为 null 或 undefined。如果该值为 null 或 undefined，那么返回一个默认值，否则返回该值本身。
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthConsumer>
          {
            (auth) => auth.isLoading
              ? <SplashScreen />
              : getLayout(<Component {...pageProps} />)
          }
        </AuthConsumer>
      </ThemeProvider>
    </AuthProvider>

  </>

}

export default MyApp

