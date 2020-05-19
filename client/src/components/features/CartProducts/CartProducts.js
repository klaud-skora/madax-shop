import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartProducts.module.scss';

import { connect } from 'react-redux';
import { getCartProducts, changeAmount, deleteProduct } from '../../../redux/cartRedux';

import TextField from '@material-ui/core/TextField';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    changeAmount: PropTypes.func,
    deleteProduct: PropTypes.func,
  };

  render() {
    const { products, changeAmount } = this.props;
    return (
      <div className={styles.cart}>
        {products.map(product => (
          <div key={product._id} className={styles.product}>
            <div className={styles.productImage}>
              <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
            </div>
            <div className={styles.productContent}>
              <div className={styles.productBox}>
                <h5>{product.name}</h5>
                <p className={styles.price}>Cena: {product.price * product.amount}zł</p>
              </div>
              <TextField label="Ilość:" type="number" InputLabelProps={{ shrink: true }} value={product.amount} className={styles.amount} onChange={ event => event.currentTarget.value > 0 ?  changeAmount(event.currentTarget.value, product._id) : null } />
            </div>
          </div>
        ))}
      </div>
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
  Container as CartProducts,
  Component as CartProductsComponent,
};
