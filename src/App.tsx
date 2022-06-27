import "./App.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Globalstyles from "./GlobalStyles";
import { store } from "./store/configureStore";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Globalstyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
