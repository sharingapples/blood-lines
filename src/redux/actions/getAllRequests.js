import axios from 'axios';
import ActionTypes from '../ActionTypes';

export default function getAllRequests() {
  return (dispatch) => {
    axios.get('/api/requests').then(({ data }) => {
      dispatch({
        type: ActionTypes.ALL_REQUESTS,
        payload: data,
      });
    });
  };
}
