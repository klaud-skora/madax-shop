import React from 'react';

import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return(
    <div className={styles.root}>
      <p>Copyright © Madax BHP 2020</p>
      <a className={styles.icon} href="https://www.facebook.com/madaxbhp/">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );

};

export default Footer;
