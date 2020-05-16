import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Order.module.scss';
// import { connect } from 'react-redux';
// import { getProductById } from '../../../redux/cartRedux';

// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class Component extends React.Component {
  // static propTypes = {

  // };

  render() {

    return (
      <div className={styles.root}>

      </div>
    );
  }
}

// const mapStateToProps = (state, props) => ({
//   product: getProductById(state, props.match.params.id),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as Order,
  // Container as Order,
  Component as OrderComponent,
};
