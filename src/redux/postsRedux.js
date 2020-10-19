/* selectors */
export const getAll = ({posts}) => posts.data;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = () => ({ type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchPostsRequest = () => {
  return async dispatch => {

    dispatch(fetchStarted());
    try {

      // let res = await axios.get(`${API_URL}/posts`);
      const res = {
        data: [{ id: 1, title: 'Hello', description: 'Lorem Ipsum', author: 'John Doe' }]
      };
      await new Promise((resolve, reject) => setTimeout(resolve, 2000));

      dispatch(fetchSuccess(res.data));
    } catch(e) {
      dispatch(fetchError(e.message));
    }

  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
