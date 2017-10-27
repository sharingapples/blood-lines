/* eslint-disable jsx-a11y/label-has-for, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    value: '',
  };

  componentWillMount() {
    if (this.context.registerField) {
      this.unregister = this.context.registerField(this.props.name, (value) => {
        this.setState({
          value,
        });
      });
    }
  }

  componentWillUnmount() {
    if (this.unregister) {
      this.unregister();
    }
  }

  handleChange = (e) => {
    if (this.context.setFieldValue) {
      this.context.setFieldValue(this.props.name, e.target.value);
    }
  }

  render() {
    const { label, id, ...other } = this.props;
    const { value } = this.state;

    return (
      <div className="row">
        <div className="label">
          { label && <label htmlFor={id}>{label}</label>}
        </div>
        <div className="input">
          <input id={id} {...other} value={value} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

Input.contextTypes = {
  registerField: PropTypes.func,
  setFieldValue: PropTypes.func,
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: null,
  id: null,
};

export default Input;
