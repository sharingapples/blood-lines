import axios from 'axios';
import ActionTypes from '../ActionTypes';

export default function toggleReady(id, ready) {
  return (dispatch) => {
    axios.patch(`/api/requests/${id}`, { ready: !ready }).then(({ data }) => {
      dispatch({
        type: ActionTypes.UPDATE_REQUEST,
        payload: data,
      });
    });
  };
}
