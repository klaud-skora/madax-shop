import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';
import { connect } from 'react-redux';
import { getCartProducts, submitOrder } from '../../../redux/cartRedux';

import Button from '@material-ui/core/Button';
import { CartProducts } from '../../features/CartProducts/CartProducts';
import TextField from '@material-ui/core/TextField';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    submitOrder: PropTypes.func,
  };

  state = {
    orderer: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      postCode: '',
      phoneNumber: '',
    },
  }

  render() {
    const { cart } = this.props;
    return (
      cart.length ?
        <div className={styles.root}>
          <div className={styles.summary}>
            <h2>Zamówienie</h2>
            <CartProducts />
            <h2> Dane do wysyłki</h2>
            <form className={styles.form}>
              <TextField className={styles.input} label="Imię" name="firstName" type="text" fullWidth />
              <TextField className={styles.input} label="Nazwisko" name="lastName" type="text" fullWidth />
              <TextField className={styles.input} label="Email" name="email" type="email" fullWidth />
              <TextField className={styles.input} label="Adres" name="address" type="text" fullWidth />
              <TextField className={styles.input} label="Kod pocztowy" name="address" type="text" fullWidth />
              <TextField className={styles.input} label="Numer tel" name="address" type="text" fullWidth />
            </form>
          </div>
          <Button className={styles.orderButton}>Zamawiam</Button>
        </div>
        : <div className={styles.root}>Brak produktów w koszyku.</div>
    );
  }
}

const mapStateToProps = state => ({
  cart: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  submitOrder: (cart, orderer) => submitOrder(cart, orderer),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
