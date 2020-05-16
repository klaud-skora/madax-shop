import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { Navigation } from '../Navigation/Navigation';

const Component = () => {

  return(
    <div className={styles.root}>
      <Link className={styles.companyLogo} to="/">
        <h3>madax BHP</h3>
      </Link>
      <Navigation />
    </div>
  );
};

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
