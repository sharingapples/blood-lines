import React from 'react';

import Form, { Input } from '../../elements/Form';

const RequestForm = () => (
  <Form action="/api/requests" method="POST" onSubmit={this.onSubmit}>
    <h1>Blood Transfusion Request</h1>
    <Input label="Patient Mobile" type="text" name="patient" />
    <Input label="Blood Group" type="text" name="blood-group" />
    <Input label="Blood Type" type="text" name="blood-type" />
    <Input label="Urgency" type="text" name="urgency" />
    <Input label="Consultant" type="text" name="consultant" />
    <Input label="Reason" type="text" name="reason" />
    <Input type="submit" />
  </Form>
);

export default RequestForm;
