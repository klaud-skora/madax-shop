import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {
  static propTypes = {
    searchString: PropTypes.string,
    changeSearchString: PropTypes.func,
  }

  state = {
    value: this.props.searchString,
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.changeSearchString(e.target.value);
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

export default Search;
