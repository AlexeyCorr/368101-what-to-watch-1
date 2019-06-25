import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {Operation} from './../../reducer/user/user.js';


const withUser = (Component) => {
  class WithUser extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLogIn: false,
      };
    }

    render() {
      return !this.state.isLogIn ? null : <Component {...this.props}/>;
    }

    componentDidMount() {
      this.props.loadUser().then(() => {
        this.setState({
          isLogIn: true,
        });
      });
    }
  }

  WithUser.propTypes = {
    loadUser: PropTypes.func,
  };

  return WithUser;
};

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(Operation.getUser()),
});

export {withUser};

export default (Component) => {
  const ConnnectedComponent = connect(null, mapDispatchToProps)(withUser(Component));

  return ConnnectedComponent;
};
