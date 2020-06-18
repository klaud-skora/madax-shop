import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCartProducts } from '../../../selectors';

import CartProductsFeatureContainer from '../../../containers/Features/CartProductsFeatureContainer';
import { Link } from 'react-router-dom';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  componentDidMount() {
    const box = document.getElementById('content') != null ? document.getElementById('content') : window;
    box.scroll(0,0);
  }

  render() {
    const { products } = this.props;
    return (
      products.length ?
        <div className={styles.root}>
          <h2>Twój koszyk</h2>
          <div className={styles.cart}>
            <CartProductsFeatureContainer />
            <div className={styles.buttonContainer}>
              <Link to={process.env.PUBLIC_URL +'/order'}>
                <Button className={styles.order}>Zamów</Button>
              </Link>
            </div>
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
