import ActionTypes from './ActionTypes';

export default function reducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.ALL_REQUESTS:
      return action.payload;

    case ActionTypes.ADD_REQUEST:
      return [
        ...state,
        action.payload,
      ];

    case ActionTypes.UPDATE_REQUEST:
      return state.map((req) => {
        if (req.id !== action.payload.id) {
          return req;
        }

        return {
          ...req,
          ...action.payload,
        };
      });

    default:
      return state;
  }
}
