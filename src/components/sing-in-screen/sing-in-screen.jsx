import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getUser, getError} from './../../reducer/user/selectors.js';
import {Operation, ActionCreator} from './../../reducer/user/user.js';
import Path from './../../paths.js';

import Header from './../header/header.jsx';
import Footer from './../footer/footer.jsx';
import withFormData from './../../hocs/with-form-data/with-form-data.jsx';

const EMAIL_FIELD_NAME = `email`;
const PASSWORD_FIELD_NAME = `password`;

class SingInScreen extends PureComponent {
  constructor(props) {
    super(props);

    this._submitHandler = this._submitHandler.bind(this);
    this._changeHandler = this._changeHandler.bind(this);
  }

  render() {
    const {user, error, form} = this.props;

    return (
      <div className="user-page">

        <Header className={`user-page__head`} title={`Sign in`} user={user}/>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this._submitHandler}
          >
            <div className="sign-in__message">
              <p>{error}</p>
            </div>
            <div className="sign-in__fields">

              {this._renderField(EMAIL_FIELD_NAME, `Email address`)}

              {this._renderField(PASSWORD_FIELD_NAME, `Password`)}

            </div>
            <div className="sign-in__submit">
              <button
                className="sign-in__btn"
                type="submit"
                disabled={!form.email || !form.password}
              >Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    );
  }

  _renderField(name, desc) {
    const {form} = this.props;
    const value = form[name] || ``;

    return (
      <div className="sign-in__field">
        <input
          className="sign-in__input"
          type={name}
          placeholder={desc}
          name={name}
          id={name}
          value={value}
          onChange={this._changeHandler}
        />
        <label
          className="sign-in__label visually-hidden"
          htmlFor={name}
        >
          {desc}
        </label>
      </div>
    );
  }

  _changeHandler(evt) {
    const {setValue} = this.props;
    const target = evt.target;

    if (target) {
      setValue(target.name, target.value);
    }
  }

  _submitHandler(evt) {
    const {logIn, logError, history, form} = this.props;
    const {email, password} = form;

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
}

SingInScreen.propTypes = {
  user: PropTypes.object,
  logIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  logError: PropTypes.func,
  error: PropTypes.string,
  form: PropTypes.object.isRequired,
  setValue: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  user: getUser(state),
  error: getError(state),
});

const mapDispachToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(Operation.logIn(email, password)),
  logError: (error) => dispatch(ActionCreator.logError(error)),
});

const WithFormSingIn = withFormData(SingInScreen);

export {SingInScreen};

export default connect(mapStateToProps, mapDispachToProps)(WithFormSingIn);
