import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
  onSubmit = () => {

  }

  render() {
    return (
      <form {...this.props} onSubmit={this.onSubmit} />
    );
  }
}

export default Form;
