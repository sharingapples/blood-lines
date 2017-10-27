/* eslint-disable jsx-a11y/label-has-for, react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
  const { label, id, ...other } = props;

  return (
    <div className="row">
      <div className="label">
        { label && <label htmlFor={id}>{label}</label>}
      </div>
      <div className="input">
        <select {...other} />
      </div>
    </div>
  );
};


Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};

Select.defaultProps = {
  label: null,
  id: null,
};

export default Select;
