import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCartProducts } from '../../../redux/cartRedux';

import { CartProducts } from '../../features/CartProducts/CartProducts';
import { Link } from 'react-router-dom';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { products } = this.props;

    return (
      products.length ?
        <div className={styles.root}>
          <h2>Twój koszyk</h2>
          <div className={styles.cart}>
            <CartProducts />
            <Link to={process.env.PUBLIC_URL +'/order'}>
              <Button className={styles.order}>Zamów</Button>
            </Link>
          </div>
        </div>
        : <div className={styles.root}>Brak produktów w koszyku.</div>
    );
  }
}
const mapStateToProps = state => ({
  products: getCartProducts(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
