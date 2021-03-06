import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './OrderSummary.module.scss';

export default function OrderSummary () {

  return (
    <div className={styles.root}>
      <h1>Dziękujemy za zakupy w naszym sklepie!</h1>
      <div className={styles.buttonContainer}>
        <Link to={process.env.PUBLIC_URL +'/'}>
          <Button className={styles.order}>Kliknij, aby przejść do strony głównej.</Button>
        </Link>
      </div>
    </div>
  );
};
