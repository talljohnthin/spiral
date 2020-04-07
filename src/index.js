import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import store from './redux/store'

import './assets/sass/global-style.scss'

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#fb5533',
        dark: '#000',
        linear: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
     },
     secondary: {
       main: '#eee',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
  document.getElementById('root')
);
