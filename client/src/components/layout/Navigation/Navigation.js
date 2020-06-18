import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import styles from './Navigation.module.scss';
import { connect } from 'react-redux';
import { getCartProducts } from '../../../selectors';

class Component extends React.Component {
  static propTypes = {
    cart: PropTypes.array,
  };

  render() {
    const { cart } = this.props;
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
  }

}


const mapStateToProps = state => ({
  cart: getCartProducts(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Navigation,
  Component as NavigationComponent,
};
