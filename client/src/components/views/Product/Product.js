import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { setCart } from '../../../redux/cartRedux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Component extends React.Component {
  static propTypes = {
    product: PropTypes.object,
    addToCart: PropTypes.func,
  };


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
            <p className={styles.price}>{product.price}zł <span className={styles.vat}> w tym VAT</span></p>
            <TextField label="Ilość:" type="number" InputLabelProps={{ shrink: true }} value={this.state.amount} className={styles.amount} onChange={ event => this.setAmount(event.currentTarget.value)} />
            <Button to={process.env.PUBLIC_URL +'/'} className={styles.cart} onClick={ () => addToCart(product, this.state.amount) }>Dodaj do koszyka <ShoppingCartIcon /></Button>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product, amount) => dispatch(setCart(product, amount)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
