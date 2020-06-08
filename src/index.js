import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "typeface-roboto";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import returnStoreAndPersistor from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

import "./assets/sass/global-style.scss";

const { store, persistor } = returnStoreAndPersistor();

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff",
      main: "#4d8ecc",
      dark: "#000",
      linear: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    },
    secondary: {
      main: "#eee",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
