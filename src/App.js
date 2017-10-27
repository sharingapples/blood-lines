/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import RequestForm from './screens/RequestForm';
import RequestList from './screens/RequestList';

import Logo from './assets/logo.png';
import './App.css';

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
          <img src={Logo} className="logo" alt="logo" />
          <div className="title">Blood - Lines</div>
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
