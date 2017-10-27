import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);

    this.fields = {};
    this.value = props.value;
  }

  getChildContext() {
    return {
      registerField: (name, onUpdate) => {
        this.fields[name] = onUpdate;
        console.log(name);
        onUpdate(this.value[name] || '');

        // Return the unregister method
        return () => {
          delete this.fields[name];
        };
      },
      setFieldValue: (name, value) => {
        if (this.fields[name]) {
          // Update the value in a local object
          this.value[name] = value;
          this.fields[name](value);
        }
      },
    };
  }

  onSubmit = (e) => {
    // Do not submit the data directly
    e.preventDefault();
    axios({
      method: this.props.method,
      url: this.props.action,
      data: this.value,
    }).then(({ data }) => {
      alert(`Success. ID: ${data.id}`);
    });
  };

  render() {
    return (
      <form {...this.props} onSubmit={this.onSubmit} />
    );
  }
}

Form.childContextTypes = {
  registerField: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

Form.propTypes = {
  // eslint-disable-next-line
  value: PropTypes.object,
  method: PropTypes.string,
  action: PropTypes.string.isRequired,
};

Form.defaultProps = {
  value: {},
  method: 'post',
};

export default Form;
