import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { setCart } from '../../actions/cartActions';
import { loadChosedProductRequest } from '../../actions/productsActions';

// components
import Product from '../../components/views/Product/Product';

// selectors
import { getChosedProduct } from '../../selectors';

function ProductViewContainer({ product, addToCart, loadProduct }) {
  return <Product
    product={product}
    addToCart={addToCart}
    loadProduct={loadProduct}
  />;
}
ProductViewContainer.propTypes = {
  product: PropTypes.object,
  addToCart: PropTypes.func,
  loadProduct: PropTypes.func,
};

export default connect(
  state => ({
    product: getChosedProduct(state),
  }),
  (dispatch, props) => ({
    addToCart: (product, amount) => dispatch(setCart(product, amount)),
    loadProduct: () => dispatch(loadChosedProductRequest(props.match.params.id)),
  })
)(ProductViewContainer);
