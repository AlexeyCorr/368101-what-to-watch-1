import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || `Component`;
};

const withActiveItem = (Component) => {

  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: undefined,
      };
      this._onActiveItem = this._onActiveItem.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          activeItem={this.state.activeItem}
          clickHandler={this._onActiveItem}
        />
      );
    }

    _onActiveItem(value) {
      this.setState({
        activeItem: value,
      });

      if (this.props.clickFilterHandler) {
        this.props.clickFilterHandler(value);
      }
    }
  }

  WithActiveItem.propTypes = {
    clickFilterHandler: PropTypes.func,
  };

  WithActiveItem.displayName = `WithActiveItem(${getDisplayName(Component)})`;

  return WithActiveItem;
};

export default withActiveItem;
