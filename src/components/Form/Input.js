/* eslint-disable jsx-a11y/label-has-for, react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

import connectField from './connectField';

const FormInput = connectField(onUpdate => ({
  onChange: e => onUpdate(e.target.value),
}))('input');

const Input = ({ label, id, ...other }) => (
  <div className="row">
    <div className="label">
      { label && <label htmlFor={id}>{label}</label>}
    </div>
    <div className="input">
      <FormInput id={id} {...other} />
    </div>
  </div>
);

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
