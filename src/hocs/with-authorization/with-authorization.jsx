import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from './../../reducer/user/selectors.js';
import Path from './../../paths.js';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
    render() {
      return (
        <Component {...this.props}/>
      );
    }

    componentDidMount() {
      const {user, history} = this.props;

      if (!user.id) {
        history.push(Path.LOGIN);
      }
    }
  }

  WithAuthorization.propTypes = {
    user: PropTypes.object,
    history: PropTypes.object,
  };

  return WithAuthorization;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
});

export {withAuthorization};

export default (Component) => {
  const ConnnectedComponent = connect(mapStateToProps)(withAuthorization(Component));

  return ConnnectedComponent;
};
