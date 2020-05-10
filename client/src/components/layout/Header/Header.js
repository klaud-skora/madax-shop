import React from 'react';
// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

import { Navigation } from '../Navigation/Navigation';

const Component = () => {

  return(
    <div className={styles.root}>
      <Link className={styles.companyLogo} href="/">
        <h3>Madax BHP</h3>
      </Link>
      <Navigation />
    </div>
  );
};

// Component.propTypes = {

// };


// const mapStateToProps = state => ({
//   state: state,
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });


export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
