import React from 'react';

import styles from './Search.module.scss';
import SearchIcon from '@material-ui/icons/Search';

class Component extends React.Component {

  state = {
    value: 'searchString',
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

export {
  Component as Search,
  Component as SearchComponent,
};
