import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Component = () => {

  return(
    <div className={styles.root}>
      <p>Copyright © Madax BHP 2020</p>
      <a className={styles.icon} href="https://www.facebook.com/madaxbhp/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
