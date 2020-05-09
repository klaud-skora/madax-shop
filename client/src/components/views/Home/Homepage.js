import React from 'react';

class Component extends React.Component {

  render() {
    return (
      <h1>Welcome to MADAX shop</h1>
    );
  }
}


// const mapStateToProps = state => ({
//   posts: getAll(state),
// });

// const mapDispachToProps = dispatch => ({
//   loadPosts: () => dispatch(loadPostsRequest()),
// });

// const Container = connect(mapStateToProps, mapDispachToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
