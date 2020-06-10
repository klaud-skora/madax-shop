import React from 'react';

import styles from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { getSearchString } from '../../../redux/searchStringRedux';

class Component extends React.Component {

  state = {
    value: this.props.searchString,
  }

  handleChange(e) {
    console.log('typing')
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
        /><SearchIcon />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchString: getSearchString(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Search,
  Component as SearchComponent,
};
