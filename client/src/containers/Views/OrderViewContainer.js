import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import Order from '../../components/views/Order/Order';

// selectors
import { getCartProducts } from '../../selectors';

function OrderViewContainer({ cart }) {
  return <Order
    cart={cart}
  />;
}
OrderViewContainer.propTypes = {
  cart: PropTypes.array,
};

export default connect(
  state => ({
    cart: getCartProducts(state),
  })
)(OrderViewContainer);
