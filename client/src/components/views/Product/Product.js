import React from 'react';
import PropTypes from 'prop-types';

import styles from './Product.module.scss';

import { connect } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';

class Component extends React.Component {
  static propTypes = {
    product: PropTypes.object,
  };

  render() {
    const { product } = this.props;
    return (
      <div className={styles.root}>
        <h2>{product.name}</h2>
        <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} alt={product.name} />
        <p>Elo</p>
      </div>
    );
  }
}


const mapStateToProps = (state, props) => ({
  product: getProductById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Product,
  Container as Product,
  Component as ProductComponent,
};
