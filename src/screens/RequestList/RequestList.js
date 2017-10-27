import React, { Component } from 'react';
import axios from 'axios';

import RequestItem from '../../components/RequestItem';

class RequestList extends Component {
  state = {
    items: [],
    loading: false,
  };

  componentWillMount() {
    this.setState({ loading: true });
    axios.get('/api/requests').then(({ data }) => {
      this.setState({
        items: data,
        loading: false,
      });
    });
  }

  render() {
    const { items, loading } = this.state;
    return (
      <div>
        {loading && <div className="loader" />}
        <div className="title">Blood Transfusion Requests</div>
        {items.map(item => (
          <RequestItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default RequestList;
