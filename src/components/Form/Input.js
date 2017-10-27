/* eslint-disable jsx-a11y/label-has-for, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, id, ...other } = this.props;

    return (
      <div>
        { label && <label htmlFor={id}>{label}</label>}
        <input id={id} {...other} />
      </div>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  id: null,
};

export default Input;
