import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({ children }) => {

  return(
    <div className={styles.root}>
      <Header />
      <div className={styles.content}>
        {children}
        <Footer />
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  Component as MainLayoutComponent,
};
