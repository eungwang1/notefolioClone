import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Globalstyles from "./GlobalStyles";
import { store } from "./store/configureStore";
import { Router } from "./pages/Router";
import { pdfjs } from "react-pdf";

function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Globalstyles />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
