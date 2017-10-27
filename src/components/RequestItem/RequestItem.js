import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import checked from '../../assets/ready.png';
import working from '../../assets/working.png';
import './RequestItem.css';

class RequestItem extends Component {
  onReady = () => {
    const { id, ready } = this.props;

    axios.patch(`/api/requests/${id}`, {
      ready: !ready,
    });
  }

  render() {
    const {
      patient, bloodGroup, bloodRhD, bloodType, urgent, consultant, reason, ready,
    } = this.props;

    return (
      <div className={`request-item${urgent ? ' urgent' : ''}`}>
        <button onClick={this.onReady}>
          <img src={ready ? checked : working} />
        </button>
        <div className="">{bloodGroup}{bloodRhD}</div>
        <div className="">{bloodType}</div>
        <div className="item-title">{patient}</div>
        <div className="">Consultant: {consultant}</div>
        <div className="">{reason}</div>
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
  urgent: PropTypes.bool.isRequired,
  consultant: PropTypes.string.isRequired,
  reason: PropTypes.string,
  ready: PropTypes.bool,
};

RequestItem.defaultProps = {
  reason: '',
  ready: false,
};

export default RequestItem;
