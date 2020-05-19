import React from 'react';
import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { getCartProducts, changeAmount, deleteProduct } from '../../../redux/cartRedux';

import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    changeAmount: PropTypes.func,
    deleteProduct: PropTypes.func,
  };

  render() {
    const { products } = this.props;

    return (
      products.length ?
        <div className={styles.root}>
          <h2>Twój koszyk</h2>
          <div className={styles.cart}>
            {products.map(product => (
              <div key={product._id} className={styles.product}>
                <div className={styles.productImage}>
                  <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
                </div>
                <div className={styles.productContent}>
                  <div className={styles.productBox}>
                    <h5>{product.name}</h5>
                    <p className={styles.price}>Cena: {product.price}zł</p>
                  </div>
                  <TextField label="Ilość:" type="number" InputLabelProps={{ shrink: true }} value={product.amount} className={styles.amount} onChange={ event => changeAmount(event.currentTarget.value, product._id)} />
                </div>
              </div>
            ))}
            <Link to={process.env.PUBLIC_URL +'/order'}>
              <Button className={styles.order}>Zamów</Button>
            </Link>
          </div>
        </div>
        : <div className={styles.root}>Brak produktów w koszyku.</div>
    );
  }
}

const mapStateToProps = state => ({
  products: getCartProducts(state),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (newAmount, id) => dispatch(changeAmount(newAmount, id)),
  deleteProduct: id => dispatch(deleteProduct(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
