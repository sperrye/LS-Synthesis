import { SET_ACTIVE_CLIP } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_CLIP:
      return action.payload.data;
    default:
      return state;
  }
};
