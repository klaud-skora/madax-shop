import React from 'react';
// import PropTypes from 'prop-types';


import styles from './AllProducts.module.scss';

const Component = () => {

  return(
    <div className={styles.root}>

    </div>
  );
};

// Component.propTypes = {

// };


// const mapStateToProps = state => ({
//   state: state,
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps)(ComponentWithRouter);

export {
  Component as AllProducts,
  // Container as AllProducts,
  Component as AllProductsComponent,
};
