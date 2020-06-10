import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { getSearchString, createAction_changeSearchString } from '../../../redux/searchStringRedux';

class Component extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
    history: PropTypes.object,
  }

  state = {
    value: this.props.searchString,
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    this.handleSearch();
  }

  handleSearch() {
    this.props.changeSearchString(this.state.value);
  }

  render() {
    const { value } = this.state;
    return (
      <div className={styles.root}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Szukaj'
          value={value}
          onChange={event => this.handleChange(event)}
        /><SearchIcon className={styles.searchIcon} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchString: getSearchString(state),
});


const mapDispatchToProps = dispatch => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Search,
  Component as SearchComponent,
};
