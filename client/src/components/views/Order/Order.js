import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';
import { connect } from 'react-redux';
import { getCartProducts, submitOrder, cleanCart } from '../../../redux/cartRedux';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { CartProducts } from '../../features/CartProducts/CartProducts';
import TextField from '@material-ui/core/TextField';

class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    submitOrder: PropTypes.func,
    cleanCart: PropTypes.func,
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

  sendOrder(){
    const { cart, submitOrder, cleanCart } = this.props;
    submitOrder(cart, this.state.orderer);
    cleanCart();
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
          <Link to={process.env.PUBLIC_URL +'/order-summary'}>
            <Button onClick={() => this.sendOrder()} className={styles.orderButton}>Zamawiam</Button>
          </Link>
        </div>
        : <div className={styles.root}>Brak produktów w koszyku.</div>
    );
  }
}

const mapStateToProps = state => ({
  cart: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  submitOrder: (cart, orderer) => dispatch(submitOrder(cart, orderer)),
  cleanCart: () => dispatch(cleanCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
