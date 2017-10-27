import React, { Component } from 'react';
import axios from 'axios';

import RequestItem from '../../components/RequestItem';

class RequestList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      loading: false,
    };

    this.source = axios.CancelToken.source();
  }

  componentWillMount() {
    this.refresh();
  }

  componentWillUnmount() {
    this.source.cancel();
  }

  refresh = () => {
    this.setState({ loading: true });
    axios.get('/api/requests', { cancelToken: this.source.token }).then(({ data }) => {
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
        <div className="page-title">
          Blood Transfusion Requests
          <button onClick={this.refresh}>Refresh</button>
        </div>
        {items.map(item => (
          <RequestItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default RequestList;
