import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser} from './../../reducer/user/selectors.js';
import {Operation} from './../../reducer/user/user.js';

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
    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._onSubmit}
          >
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
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }

  _onSubmit(evt) {
    const {logIn} = this.props;
    const {email, password} = this.state;

    evt.preventDefault();

    if (email && password) {
      logIn(email, password);
    } else {
      throw new Error(`Введите email и пароль`);
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
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
});

const mapDispachToProps = (dispatch) => ({
  logIn: (email, password) => {
    dispatch(Operation.logIn(email, password));
  },
});

export {SingInScreen};

export default connect(mapStateToProps, mapDispachToProps)(SingInScreen);
