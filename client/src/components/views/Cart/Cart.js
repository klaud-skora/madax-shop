import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCartProducts } from '../../../redux/cartRedux';

// import TextField from '@material-ui/core/TextField';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Component extends React.Component {
  static propTypes = {

  };

  render() {

    return (
      <div className={styles.root}>
        <h2>Twój koszyk</h2>
        <div className={styles.cart}>

          <Button to={process.env.PUBLIC_URL +'/'} className={styles.order}>Zamów</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  // loadCart: () => dispatch(loadCartRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
