import React, { Component } from 'react';

class Form extends Component {
  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form {...this.props} onSubmit={this.onSubmit} />
    );
  }
}

export default Form;
