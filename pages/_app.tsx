import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";
import Globalstyles from "../src/GlobalStyles";
import wrapper, { store } from "../src/store/configureStore";
import { pdfjs } from "react-pdf";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "rc-dropdown/assets/index.css";

function App({ Component, pageProps }) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
