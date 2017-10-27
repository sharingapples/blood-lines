import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import toggleReady from '../../redux/actions/toggleReady';

import checked from '../../assets/ready.png';
import working from '../../assets/working.png';
import './RequestItem.css';

const RequestItem = ({
  patient, bloodGroup, bloodRhD, bloodType, urgent, consultant, reason, ready, onToggleReady,
}) => (
  <div className={`request-item${urgent ? ' urgent' : ''}`}>
    <button className="btn-status" onClick={onToggleReady}>
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
  onToggleReady: PropTypes.func.isRequired,
};

RequestItem.defaultProps = {
  reason: '',
  urgent: false,
  ready: false,
};

const mapDispatchToProps = (dispatch, props) => ({
  onToggleReady: () => dispatch(toggleReady(props.id, props.ready)),
});

export default connect(null, mapDispatchToProps)(RequestItem);
