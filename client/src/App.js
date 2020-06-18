import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// import components
import { MainLayout } from './components/layout/MainLayout/MainLayout';

// import routes
import { Homepage } from './components/views/Home/Homepage';
import { Product } from './components/views/Product/Product';
import { Cart } from './components/views/Cart/Cart';
import { Order } from './components/views/Order/Order';
import { OrderSummary } from './components/views/OrderSummary/OrderSummary';

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
                  <Route exact path="/product/:id" component={ Product } />
                  <Route exact path="/cart" component={ Cart } />
                  <Route exact path="/order" component={ Order } />
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
