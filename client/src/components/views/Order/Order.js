import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';
import { connect } from 'react-redux';
import { getCartProducts, changeAmount, deleteProduct, submitOrder } from '../../../redux/cartRedux';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    submitOrder: PropTypes.func,
    changeAmount: PropTypes.func,
    deleteProduct: PropTypes.func,
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
    const { cart, changeAmount} = this.props;
    return (
      cart.length ?
        <div className={styles.root}>
          <div className={styles.summary}>
            <h2>Zamówienie</h2>
            {cart.map(product => (
              <div key={product._id} className={styles.product}>
                <div className={styles.productImage}>
                  <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productBox}>
                    <h5>{product.name}</h5>
                    <p className={styles.price}>Cena: {product.price * product.amount}zł</p>
                  </div>
                  <TextField label="Ilość:" type="number" InputLabelProps={{ shrink: true }} value={product.amount} className={styles.amount} onChange={ event => event.currentTarget.value > 0 ?  changeAmount(event.currentTarget.value, product._id) : null } />
                </div>
              </div>
            ))}
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
  changeAmount: (newAmount, id) => dispatch(changeAmount(newAmount, id)),
  deleteProduct: id => dispatch(deleteProduct(id)),
  submitOrder: (cart, orderer) => submitOrder(cart, orderer),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
