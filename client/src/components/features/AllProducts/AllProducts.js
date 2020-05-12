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
        {products.map(product => (
          <Link key={product.id} to={process.env.PUBLIC_URL + `/product/${product.id}`} className={styles.product} >
            <div className={styles.image}>
              <img src={product.image} alt={product.name}/>
            </div>
            <div className={styles.productContent}>
              <h5>{product.name}</h5>
            </div>
          </Link>
        ))}
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
