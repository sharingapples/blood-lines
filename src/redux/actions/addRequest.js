import ActionTypes from '../ActionTypes';

export default function addRequest(request) {
  return ({
    type: ActionTypes.ADD_REQUEST,
    payload: request,
  });
}
