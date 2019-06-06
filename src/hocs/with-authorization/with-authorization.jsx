import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';

import Path from './../../paths.js';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
    render() {
      return (
        <Component {...this.props}/>
      );
    }

    componentDidMount() {
      const {user} = this.props;

      if (!user.id) {
        history.pushState(null, null, Path.LOGIN);
      }
    }
  }

  WithAuthorization.propTypes = {
    user: PropTypes.object,
  };

  return WithAuthorization;
};

// const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
//   user: getUser(state),
// });

export {withAuthorization};

export default withAuthorization;
