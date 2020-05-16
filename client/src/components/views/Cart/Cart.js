import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCart, loadCartRequest } from '../../../redux/cartRedux';

// import TextField from '@material-ui/core/TextField';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Component extends React.Component {
  static propTypes = {
    productsInCart: PropTypes.array,
    loadCart: PropTypes.func,
  };

  componentDidMount() {
    const { loadCart } = this.props;
    loadCart();
  }

  render() {
    const { productsInCart } = this.props;
    console.log(productsInCart);
    return (
      <div className={styles.root}>
        <h2>Twój koszyk</h2>
        <div className={styles.cart}>
          {/* {productsInCart.map(order => (
            <div key={order._id} PclassName={styles.orderItem}>

            </div>
          ))} */}
          <Button to={process.env.PUBLIC_URL +'/'} className={styles.order}>Zamów</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  productsInCart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  loadCart: () => dispatch(loadCartRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
