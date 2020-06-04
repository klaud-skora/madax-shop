import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderSummary.module.scss';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Component extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    submitOrder: PropTypes.func,
  };

  componentDidMount() {
    const box = document.getElementById('content') != null ? document.getElementById('content') : window;
    box.scroll(0,0);
  }

  render() {
    return (
      <div className={styles.root}>
        <h1>Dziękujemy za zakupy w naszym sklepie!</h1>
        <Link to={process.env.PUBLIC_URL +'/'}>
          <Button className={styles.order}>Kliknij, aby przejść do strony głównej.</Button>
        </Link>
      </div>
    );
  }
}
export {
  Component as OrderSummary,
  Component as OrderSummaryComponent,
};
