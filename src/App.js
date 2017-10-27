/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import RequestForm from './screens/RequestForm';
import RequestList from './screens/RequestList';


import Logo from './assets/logo.png';
import './App.css';
import reducer from './redux/reducer';
import getAllRequests from './redux/actions/getAllRequests';

// Create the redux store
const store = createStore(reducer, applyMiddleware(thunk));

// Load initial data
store.dispatch(getAllRequests());

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
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
