import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';

// components
import OrderFormFeatureContainer from '../../../containers/Features/OrderFormFeatureContainer';
import CartProductsFeatureContainer from '../../../containers/Features/CartProductsFeatureContainer';

export default function Order ({ cart }) {
  return (
    cart.length ?
      <div className={styles.root}>
        <div className={styles.summary}>
          <h2>Zamówienie</h2>
          <CartProductsFeatureContainer />
          <h2> Dane do wysyłki</h2>
        </div>
        <OrderFormFeatureContainer />
      </div>
      : <div className={styles.root}>Brak produktów w koszyku.</div>
  );
};
Order.propTypes = {
  cart: PropTypes.array,
};
