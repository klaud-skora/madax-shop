import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './AllProducts.module.scss';

// components
import SearchFeatureContainer from '../../../containers/Features/SearchFeatureContainer';

export default function AllProducts ({ allProducts, searchString, loadProducts }) {

  useEffect(() => {
    loadProducts();
  });

  const productsToDisplay = allProducts === 'undefined' ? [] : searchString === '' ? allProducts : allProducts.filter(product => new RegExp(searchString, 'i').test(product.name));
  return (
    <div className={styles.root}>
      <div className={styles.allProdcutsHeader}>
        <h2>Nasze produkty</h2>
        <SearchFeatureContainer />
      </div>
      <div className={styles.wrapper}>
        {productsToDisplay.map(product => (
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
};
AllProducts.propTypes = {
  allProducts: PropTypes.array,
  loadProducts: PropTypes.func,
  searchString: PropTypes.string,
};
