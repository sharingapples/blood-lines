import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import checked from '../../assets/ready.png';
import working from '../../assets/working.png';
import './RequestItem.css';

class RequestItem extends Component {
  state = {
    ready: this.props.ready,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ready: nextProps.ready,
    });
  }

  onReady = () => {
    const { id } = this.props;
    const { ready } = this.state;

    axios.patch(`/api/requests/${id}`, {
      ready: !ready,
    }).then(({ data }) => {
      this.setState({
        ready: data.ready,
      });
    });
  }

  render() {
    const {
      patient, bloodGroup, bloodRhD, bloodType, urgent, consultant, reason
    } = this.props;

    const { ready } = this.state;

    return (
      <div className={`request-item${urgent ? ' urgent' : ''}`}>
        <button className="btn-status" onClick={this.onReady}>
          <img src={ready ? checked : working} />
        </button>
        <div className="blood-group">{bloodGroup}{bloodRhD}ve</div>
        <div className="blood-type">{bloodType}</div>
        <div className="info">
          <div className="item-title">{patient}</div>
          <div className="consultant">Consultant: {consultant}</div>
        </div>
        <div className="reason">{reason}</div>
      </div>
    );
  }
}

RequestItem.propTypes = {
  id: PropTypes.number.isRequired,
  patient: PropTypes.string.isRequired,
  bloodGroup: PropTypes.oneOf(['A', 'B', 'O', 'AB']).isRequired,
  bloodRhD: PropTypes.oneOf(['+', '-']).isRequired,
  bloodType: PropTypes.oneOf(['RBC', 'Platelets', 'Plasma']).isRequired,
  urgent: PropTypes.bool,
  consultant: PropTypes.string.isRequired,
  reason: PropTypes.string,
  ready: PropTypes.bool,
};

RequestItem.defaultProps = {
  reason: '',
  urgent: false,
  ready: false,
};

export default RequestItem;
