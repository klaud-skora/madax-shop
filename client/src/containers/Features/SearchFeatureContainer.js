import React from 'react';
import { connect } from 'react-redux';
import Search from '../../components/features/Search/Search';
import PropTypes from 'prop-types';

import { getSearchString } from '../../selectors';
import { createAction_changeSearchString } from '../../actions/searchStringActions';

function SearchFeatureContainer({ searchString, changeSearchString }) {
  return <Search
    searchString={searchString}
    changeSearchString={changeSearchString}
  />;
}

SearchFeatureContainer.propTypes = {
  searchString: PropTypes.string,
  changeSearchString: PropTypes.func,
};

export default connect(
  state => ({
    searchString: getSearchString(state),
  }),
  (dispatch) => ({
    changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
  })
)(SearchFeatureContainer);
