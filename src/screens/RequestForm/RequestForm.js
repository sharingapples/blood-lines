import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import addRequest from '../../redux/actions/addRequest';
import Form, { Select, Input } from '../../components/Form';

const defaultValue = {
  bloodGroup: 'O',
  bloodRhD: '+',
  bloodType: 'RBC',
  urgent: false,
  consultant: 'Dr. Govind K. C.',
  reason: '',
};

const RequestForm = ({ onSubmit }) => (
  <Form action="/api/requests" onSubmit={onSubmit} value={defaultValue}>
    <div className="page-title">Blood Transfusion Request</div>
    <Input label="Patient" type="text" name="patient" />
    <Select label="Blood Group" name="bloodGroup">
      <option>A</option>
      <option>B</option>
      <option>O</option>
      <option>AB</option>
    </Select>
    <Select label="Blood RhD" name="bloodRhD">
      <option value="+">positive</option>
      <option value="-">negative</option>
    </Select>
    <Select label="Blood Type" name="bloodType">
      <option>RBC</option>
      <option>Platelets</option>
      <option>Plasma</option>
    </Select>
    <Input label="Urgent" type="checkbox" name="urgent" />
    <Input label="Consultant" type="text" name="consultant" />
    <Input label="Reason" type="text" name="reason" />
    <button type="submit">Submit</button>
  </Form>
);

RequestForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (record) => {
    dispatch(addRequest(record));
    alert('Record added successfully');
  },
});

export default connect(null, mapDispatchToProps)(RequestForm);
