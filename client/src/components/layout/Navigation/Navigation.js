import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import styles from './Navigation.module.scss';

const Navigation = ({ cart }) => {
  return(
    <div className={styles.root}>
      <nav>
        {cart.length ? <div className={styles.cartDot}>
          {cart.length}
        </div> : null}
        <Button component={NavLink} exact to={process.env.PUBLIC_URL +'/cart'} activeClassName='active' className={styles.cart}>Koszyk <ShoppingCartIcon /></Button>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  cart: PropTypes.array,
};

export default Navigation;
