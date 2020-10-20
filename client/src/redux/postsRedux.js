import shortid from 'shortid';
import axios from 'axios';
const API_URL = 'http://localhost:8000/api';


/* selectors */
export const getAll = ({posts}) => posts.data;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const LOADING_START = createActionName('LOADING_START');
const LOADING_SUCCESS = createActionName('LOADING_SUCCESS');
const LOADING_ERROR = createActionName('LOADING_ERROR');
const ADD_DATA = createActionName('ADD_DATA');
const ADD_POST = createActionName('ADD_POST');

/* action creators */
export const loadingStarted = () => ({ type: LOADING_START });
export const loadingSuccess = () => ({ type: LOADING_SUCCESS });
export const addData = payload => ({ payload, type: ADD_DATA });
export const loadingError = payload => ({ payload, type: LOADING_ERROR });
export const addPost = payload => ({ payload, type: ADD_POST });

/* thunk creators */
export const fetchPostsRequest = () => {
  return async dispatch => {

    dispatch(loadingStarted());
    try {

      let res = await axios.get(`${API_URL}/posts`);
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));

      dispatch(addData(res.data));
      dispatch(loadingSuccess());
    } catch(e) {
      dispatch(loadingError(e.message));
    }

  };
};

/* thunk creators */
export const addPostRequest = (post) => {
  return async dispatch => {

    dispatch(loadingStarted());
    try {

      const postData = { ...post, id: shortid() }

      let res = await axios.post(`${API_URL}/posts`, postData);
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));

      dispatch(loadingSuccess());
      dispatch(addPost(postData));
    } catch(e) {
      dispatch(loadingError(e.message));
    }

  };
};
/* reducer */
export const reducer = (statePart = [], action = {}) => {
  console.log(action);
  switch (action.type) {
    case LOADING_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case LOADING_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case LOADING_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_DATA: {
      return {
        ...statePart,
        data: action.payload,
      };
    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      };
    }
    default:
      return statePart;
  }
};
