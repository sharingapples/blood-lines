import ActionTypes from '../ActionTypes';

const allRequests = require('../local.db.json').requests;

export default function getAllRequests() {
  return ({
    type: ActionTypes.ALL_REQUESTS,
    payload: allRequests,
  });
}
