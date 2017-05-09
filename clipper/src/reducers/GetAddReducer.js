import { GET_CLIPS, ADD_CLIP } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_CLIP:
      return state.concat([action.payload.data]);
    case GET_CLIPS:
      return action.payload.data;
    default:
      return state;
  }
};
