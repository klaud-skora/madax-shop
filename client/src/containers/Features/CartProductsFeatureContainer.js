import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// actions
import { changeAmount, deleteProduct } from '../../actions/cartActions';

// components
import CartProducts from '../../components/features/CartProducts/CartProducts';

// selectors
import { getCartProducts } from '../../selectors';

function CartProductsFeatureContainer({ products, changeAmount, deleteProduct }) {
  return <CartProducts
    products={products}
    changeAmount={changeAmount}
    deleteProduct={deleteProduct}
  />;
}
CartProductsFeatureContainer.propTypes = {
  products: PropTypes.array,
  changeAmount: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default connect(
  state => ({
    products: getCartProducts(state),
  }),
  (dispatch) => ({
    changeAmount: (newAmount, id) => dispatch(changeAmount(newAmount, id)),
    deleteProduct: id => dispatch(deleteProduct(id)),
  })
)(CartProductsFeatureContainer);
