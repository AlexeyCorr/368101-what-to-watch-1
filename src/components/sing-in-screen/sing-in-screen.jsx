import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser, getError} from './../../reducer/user/selectors.js';
import {Operation, ActionCreator} from './../../reducer/user/user.js';
import Path from './../../paths.js';

import Header from './../header/header.jsx';
import Footer from './../footer/footer.jsx';

class SingInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: undefined,
      password: undefined,
    };

    this._onSubmit = this._onSubmit.bind(this);
    this._onChengeEmailInput = this._onChengeEmailInput.bind(this);
    this._onChengePasswordInput = this._onChengePasswordInput.bind(this);
  }

  render() {
    const {user, error} = this.props;

    return (
      <div className="user-page">

        <Header className={`user-page__head`} title={`Sign in`} user={user}/>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._onSubmit}
          >
            <div className="sign-in__message">
              <p>{error}</p>
            </div>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  autoComplete="username email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  onChange={this._onChengeEmailInput}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  autoComplete="current-password"
                  onChange={this._onChengePasswordInput}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
              >Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }

  componentDidMount() {
    const {user, history} = this.props;

    if (user.id) {
      history.push(Path.MAIN);
    }
  }

  _onSubmit(evt) {
    const {logIn, logError, history} = this.props;
    const {email, password} = this.state;

    evt.preventDefault();

    if (email && password) {
      logIn(email, password).then(() => {
        if (history.length > 1) {
          history.goBack();
        } else {
          history.push(Path.MAIN);
        }
      });
    } else {
      logError(`Fields email and password is required.`);
    }
  }

  _onChengeEmailInput(evt) {
    const {target} = evt;

    if (target) {
      this.setState({
        email: target.value
      });
    }
  }

  _onChengePasswordInput(evt) {
    const {target} = evt;

    if (target) {
      this.setState({
        password: target.value
      });
    }
  }
}

SingInScreen.propTypes = {
  user: PropTypes.object,
  logIn: PropTypes.func.isRequired,
  history: PropTypes.object,
  logError: PropTypes.func,
  error: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  error: getError(state),
});

const mapDispachToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(Operation.logIn(email, password)),
  logError: (error) => dispatch(ActionCreator.logError(error)),
});

export {SingInScreen};

export default connect(mapStateToProps, mapDispachToProps)(SingInScreen);
