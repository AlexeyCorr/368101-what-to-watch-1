import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withActiveMovie = (Component) => {
  class WithActiveMovie extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        avtivePlayer: -1,
      };
      this._timeout = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          activePlayer={this.state.avtivePlayer}
          mouseEnterHandler={(id) => this._mouseEnter(id)}
          mouseLeaveHandler={this._mouseLeave}
        />
      );
    }

    componentWillUnmount() {
      this._timeout = null;
    }

    _mouseEnter(id) {
      const timeoutID = window.setTimeout(() => {
        this.setState({
          activePlayer: this.state.activePlayer === id ? -1 : id
        });
      }, 1000);
      this._timeout = timeoutID;
    }

    _mouseLeave() {
      this.setState({activePlayer: -1});
      if (this._timeout) {
        window.clearTimeout(this._timeout);
      }
    }
  }

  WithActiveMovie.propTypes = {}

  return WithActiveMovie;
};

export default withActiveMovie;
