import React from 'react';
import { connect } from 'react-redux';
import OrderForm from '../../components/features/OrderForm/OrderForm';

import PropTypes from 'prop-types';
import { getAll } from '../../selectors';
import { submitOrder, cleanCart } from '../../actions/cartActions';

function OrderFormFeatureContainer({ cart, submitOrder, cleanCart }) {
  return <OrderForm
    cart={cart}
    submitOrder={submitOrder}
    cleanCart={cleanCart}
  />;
}
OrderFormFeatureContainer.propTypes = {
  cart: PropTypes.array,
  submitOrder: PropTypes.func,
  cleanCart: PropTypes.func,
};

export default connect(
  state => ({
    cart: getAll(state),
  }),
  (dispatch) => ({
    submitOrder: (cart, orderer) => dispatch(submitOrder(cart, orderer)),
    cleanCart: () => dispatch(cleanCart()),
  })
)(OrderFormFeatureContainer);
