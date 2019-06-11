import {
  FETCH_MOVIES_BEGIN,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "../actions";

const movies = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        movies: state.movies.concat({
          id: action.id,
          title: action.title,
          description: action.description
        }),
        loading: false,
        error: null
      };

    case FETCH_MOVIES_BEGIN:
      return {
        ...state,
        movies: [],
        loading: true,
        error: null
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        movies: []
      };

    default:
      return state;
  }
};

export default movies;
