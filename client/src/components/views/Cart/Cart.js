import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './Cart.module.scss';

// components
import CartProductsFeatureContainer from '../../../containers/Features/CartProductsFeatureContainer';


export default class Cart extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  componentDidMount() {
    window.scroll(0,0);
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
