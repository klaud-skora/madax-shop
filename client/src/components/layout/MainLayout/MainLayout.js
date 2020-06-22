import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

// components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function MainLayout ({ children }) {
  return(
    <div className={styles.root}>
      <Header />
      <div id="content" className={styles.content}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
