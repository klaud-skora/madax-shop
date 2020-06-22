import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// actions
import { createAction_changeSearchString } from '../../actions/searchStringActions';

// components
import Search from '../../components/features/Search/Search';

// selectors
import { getSearchString } from '../../selectors';

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
