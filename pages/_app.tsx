import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { pdfjs } from "react-pdf";
import { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "rc-dropdown/assets/index.css";
import Head from "next/head";
import Globalstyles from "src/GlobalStyles";
import wrapper, { store } from "@store/configureStore";
import theme from "@styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <>
      <Head>
        <title>해피폴리오</title>
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Globalstyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default wrapper.withRedux(App);
