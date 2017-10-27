import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RequestItem from '../../components/RequestItem';
import getAllRequests from '../../redux/actions/getAllRequests';

const RequestList = ({ items, onRefresh }) => (
  <div>
    <div className="page-title">
      Blood Transfusion Requests
      <button onClick={onRefresh}>Refresh</button>
    </div>
    {items.map(item => (
      <RequestItem key={item.id} {...item} />
    ))}
  </div>
);

RequestList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRefresh: PropTypes.func.isRequired,
};

// Map the store state to change it to properties
const mapStateToProps = state => ({
  items: state,
});

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(getAllRequests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
