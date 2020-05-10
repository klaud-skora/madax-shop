import React from 'react';
// import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import styles from './Navigation.module.scss';

const Component = () => {

  return(
    <div className={styles.root}>
      <nav>
        <Button component={NavLink} exact to={process.env.PUBLIC_URL +'/'} activeClassName='active'>Koszyk</Button>
      </nav>
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
  Component as Navigation,
  // Container as Navigation,
  Component as NavigationComponent,
};
