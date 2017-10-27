import ActionTypes from '../ActionTypes';

export default function toggleReady(id, ready) {
  return ({
    type: ActionTypes.UPDATE_REQUEST,
    payload: {
      id,
      ready: !ready,
    },
  });
}
