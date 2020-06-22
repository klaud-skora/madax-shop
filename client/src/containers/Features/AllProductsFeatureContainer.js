import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { loadProductsRequest } from '../../actions/productsActions';

// components
import AllProducts from '../../components/features/AllProducts/AllProducts';


// selectors
import { getAll, getSearchString } from '../../selectors';

function AllProductsFeatureContainer({ allProducts, searchString, loadProducts }) {
  return <AllProducts
    allProducts={allProducts}
    searchString={searchString}
    loadProducts={loadProducts}
  />;
}

AllProductsFeatureContainer.propTypes = {
  allProducts: PropTypes.array,
  searchString: PropTypes.string,
  loadProducts: PropTypes.func,
};

export default connect(
  state => ({
    allProducts: getAll(state),
    searchString: getSearchString(state),
  }),
  (dispatch) => ({
    loadProducts: () => dispatch(loadProductsRequest()),
  })
)(AllProductsFeatureContainer);
