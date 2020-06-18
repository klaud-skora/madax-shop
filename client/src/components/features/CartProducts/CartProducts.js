import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartProducts.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const CartProducts = ({ products, deleteProduct, changeAmount }) => {

  return (
    <div className={styles.cart}>
      {products.map(product => (
        <div key={product._id} className={styles.product}>
          <div className={styles.productImage}>
            <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
          </div>
          <div className={styles.productContent}>
            <div className={styles.productBox}>
              <div className={styles.can}>
                <h5>{product.name}</h5>
                <DeleteIcon onClick={() => deleteProduct(product._id)} />
              </div>
              <p className={styles.price}>Cena: {product.price * product.amount}zł</p>
            </div>
            <TextField label="Ilość:" type="number" InputLabelProps={{ shrink: true }} value={product.amount} className={styles.amount} onChange={ event => event.currentTarget.value > 0 ?  changeAmount(event.currentTarget.value, product._id) : null } />
          </div>
        </div>
      ))}
    </div>
  );
};

CartProducts.propTypes = {
  products: PropTypes.array,
  changeAmount: PropTypes.func,
  deleteProduct: PropTypes.func,
};

export default CartProducts;
