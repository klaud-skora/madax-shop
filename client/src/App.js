import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// import components
import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Homepage from './components/views/Home/Homepage';
import ProductViewContainer from './containers/Views/ProductViewContainer';
import CartViewContainer from './containers/Views/CartViewContainer';
import OrderViewContainer from './containers/Views/OrderViewContainer';
import OrderSummary from './components/views/OrderSummary/OrderSummary';

// store
import { store } from './store/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#8aaf24' },
  },
});

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainLayout>
                <Switch>
                  <Route exact path="/" component={ Homepage } />
                  <Route exact path="/product/:id" component={ ProductViewContainer } />
                  <Route exact path="/cart" component={ CartViewContainer } />
                  <Route exact path="/order" component={ OrderViewContainer } />
                  <Route exact path="/order-summary" component={ OrderSummary } />
                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
