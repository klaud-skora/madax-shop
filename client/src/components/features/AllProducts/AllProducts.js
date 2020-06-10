import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, loadProductsRequest } from '../../../redux/productsRedux';

import { Link } from 'react-router-dom';
import styles from './AllProducts.module.scss';

import { Search } from '../Search/Search';

class Component extends React.Component {

  static propTypes = {
    products: PropTypes.array,
    loadProducts: PropTypes.func,
  }

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.allProdcutsHeader}>
          <h2>Nasze produkty</h2>
          <Search />
        </div>
        <div className={styles.wrapper}>
          {products.map(product => (
            <Link key={product.name} to={process.env.PUBLIC_URL + `/product/${product._id}`} className={styles.product} >
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

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as AllProducts,
  Component as AllProductsComponent,
};
