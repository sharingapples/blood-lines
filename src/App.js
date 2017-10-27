/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import RequestForm from './screens/RequestForm';
import RequestList from './screens/RequestList';

import Logo from './assets/logo.png';

class App extends Component {
  state = {
    Screen: RequestList,
  };

  showForm = () => {
    this.setState({
      Screen: RequestForm,
    });
  }

  showList = () => {
    this.setState({
      Screen: RequestList,
    });
  }

  render() {
    const { Screen } = this.state;

    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Blood-Lines</h1>
          <img src={Logo} className="logo" alt="logo" />
          <button onClick={this.showForm}>Request Form</button>
          <button onClick={this.showList}>Requests</button>
        </header>
        <div className="body">
          <Screen />
        </div>
      </div>
    );
  }
}

export default App;
