import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import NavigationLayoutContainer from '../../../containers/Layout/NavigationLayoutContainer';

const Header = () => {
  return(
    <div className={styles.root}>
      <Link className={styles.companyLogo} to="/">
        <h3>madax BHP</h3>
      </Link>
      <NavigationLayoutContainer />
    </div>
  );
};

export default Header;
