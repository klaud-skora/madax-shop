import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';

// components
import OrderFormFeatureContainer from '../../../containers/Features/OrderFormFeatureContainer';
import CartProductsFeatureContainer from '../../../containers/Features/CartProductsFeatureContainer';

export default class Order extends React.Component {

  renderFilledCart() {
    return (
      <div className={styles.cart}>
        <div className={styles.summary}>
          <h2>Zamówienie</h2>
            <CartProductsFeatureContainer />
          <h2> Dane do wysyłki</h2>
        </div>
        <OrderFormFeatureContainer />
      </div>
    );
  }

  renderEmptyCart() {
    return <h3>Brak produktów w koszyku</h3>;
  }

  render() {
    const { cart } = this.props;
    return (
      <div className={styles.root}>

        { cart.length && this.renderFilledCart() }
        { !cart.length && this.renderEmptyCart() }

      </div>
    );
  }
};
Order.propTypes = {
  cart: PropTypes.array,
};
