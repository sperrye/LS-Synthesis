import axios from 'axios';

export const GET_CLIPS = 'GET_CLIPS';
export const SET_ACTIVE_CLIP = 'SET_ACTIVE_CLIP';
export const ADD_CLIP = 'ADD_CLIP';

export const getClips = () => {
  const promise = axios.get('http://localhost:5000/clips')
  return {
    type: GET_CLIPS,
    payload: promise,
  };
};

export const setActiveClip = (id) => {
  const promise = axios.get(`http://localhost:5000/clips/${id}`);
  return {
    type: SET_ACTIVE_CLIP,
    payload: promise,
  };
};

export const addClip = (clip) => {
  const promise = axios.post('http://localhost:5000/clips', clip);
  return {
    type: ADD_CLIP,
    payload: promise,
  };
};
