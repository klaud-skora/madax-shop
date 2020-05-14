import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';

import { Link } from 'react-router-dom';
import styles from './AllProducts.module.scss';

class Component extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { products } = this.props;
    return (
      <div className={styles.root}>
        <h2>Nasze produkty</h2>
        <div className={styles.wrapper}>
          {products.map(product => (
            <Link key={product.id} to={process.env.PUBLIC_URL + `/product/${product.id}`} className={styles.product} >
              <span className={styles.more}>Pokaż więcej</span>
              <div className={styles.image}>
                <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
              </div>
              <div className={styles.productContent}>
                <h5 className={styles.productName}>{product.name}</h5>
                <span className={styles.price}>{product.price}zł</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as AllProducts,
  Container as AllProducts,
  Component as AllProductsComponent,
};
