import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import Product from '../../components/views/Product/Product';

// import { getProductById } from '../../selectors';
import { setCart } from '../../actions/cartActions';

function ProductViewContainer({ addToCart }) {
  return <Product
    addToCart={addToCart}
  />;
}
ProductViewContainer.propTypes = {
  addToCart: PropTypes.func,
};

export default connect(
  state => ({
    // product: getProductById(state, props.match.params.id),
  }),
  (dispatch) => ({
    addToCart: (product, amount) => dispatch(setCart(product, amount)),
  })
)(ProductViewContainer);
