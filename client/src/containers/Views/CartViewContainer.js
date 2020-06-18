import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Cart from '../../components/views/Cart/Cart';
import { getCartProducts } from '../../selectors';

function CartViewContainer({ products }) {
  return <Cart
    products={products}
  />;
}
CartViewContainer.propTypes = {
  products: PropTypes.array,
};

export default connect(
  state => ({
    products: getCartProducts(state),
  })
)(CartViewContainer);
