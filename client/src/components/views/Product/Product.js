import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func,
  };

  componentDidMount() {
    const box = document.getElementById('content') != null ? document.getElementById('content') : window;
    box.scroll(0,0);
  }

  setAmount(value) {
    this.setState({ amount: value });
  }

  state = {
    amount: 1,
  }

  render() {
    const { product, addToCart } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.productBox}>
          <div className={styles.imageBox}>
            <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
          </div>
          <div className={styles.orderBox}>
            <h2>{product.name}</h2>
            <p className={styles.price}>{product.price * this.state.amount}zł <span className={styles.vat}> w tym VAT</span></p>
            <TextField label="Ilość:" type="number" InputLabelProps={{ shrink: true }} value={this.state.amount} className={styles.amount} onChange={ event => event.currentTarget.value > 0 ? this.setAmount(event.currentTarget.value) : null} />
            <Button to={process.env.PUBLIC_URL +'/'} className={styles.cart} onClick={ () => addToCart(product, this.state.amount) }>Dodaj do koszyka <ShoppingCartIcon /></Button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }
}

export default Product;
