import React, {PureComponent} from 'react';

const withFormData = (Component) => {
  class WithFormData extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        form: {},
      };

      this._setValue = this._setValue.bind(this);
    }

    render() {
      const {form} = this.state;

      return (
        <Component
          {...this.props}
          form={form}
          setValue={this._setValue}
        />
      );
    }

    _setValue(field, value) {
      this.setState((state) => ({
        form: Object.assign({}, state.form, {
          [field]: value,
        })
      }));
    }
  }

  return WithFormData;
};

export default withFormData;
