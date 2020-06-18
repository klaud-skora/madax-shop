import React from 'react';
import PropTypes from 'prop-types';

import styles from './Order.module.scss';
import { connect } from 'react-redux';
import { getCartProducts } from '../../../selectors';

import { CartProducts } from '../../features/CartProducts/CartProducts';
import OrderFormFeatureContainer from '../../../containers/Features/OrderFormFeatureContainer';

class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
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
          </div>
          <OrderFormFeatureContainer />
        </div>
        : <div className={styles.root}>Brak produktów w koszyku.</div>
    );
  }
}

const mapStateToProps = state => ({
  cart: getCartProducts(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Order,
  Component as OrderComponent,
};
