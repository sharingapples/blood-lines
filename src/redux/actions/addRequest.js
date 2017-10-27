import axios from 'axios';
import ActionTypes from '../ActionTypes';

export default function addRequest(request) {
  return (dispatch) => {
    axios.post('/api/requests', request).then(({ data }) => {
      dispatch({
        type: ActionTypes.ADD_REQUEST,
        payload: data,
      });
    });
  };
}
