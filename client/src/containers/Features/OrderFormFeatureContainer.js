import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { submitOrder, cleanCart } from '../../actions/cartActions';

// components
import OrderForm from '../../components/features/OrderForm/OrderForm';

// selectors
import { getAll } from '../../selectors';

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
