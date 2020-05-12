import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Product.module.scss';

class Component extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h2>Product </h2>
      </div>
    );
  }
}

// Component.propTypes = {

// };


// const mapStateToProps = state => ({
//   state: state,
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });


export {
  Component as Product,
  // Container as Footer,
  Component as ProductComponent,
};
