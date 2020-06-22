import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Navigation from '../../components/layout/Navigation/Navigation';

// selectors
import { getCartProducts } from '../../selectors';

function NavigationLayoutContainer({ cart }) {
  return <Navigation
    cart={cart}
  />;
}
NavigationLayoutContainer.propTypes = {
  cart: PropTypes.array,
};

export default connect(
  state => ({
    cart: getCartProducts(state),
  })
)(NavigationLayoutContainer);
