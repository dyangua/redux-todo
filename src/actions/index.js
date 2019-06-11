import axios from "axios";

export const FETCH_MOVIES_BEGIN = "FETCH_MOVIES_BEGIN";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const addMovie = movie => ({
  type: "ADD_MOVIE",
  id: movie.id,
  title: movie.title,
  description: movie.description
});

export const fetchMovies = () => {
  return dispatch => {
    dispatch(FetchMoviesBegin());
    return axios
      .get("https://ghibliapi.herokuapp.com/films")
      .then(res => {
        dispatch(fetchMoviesSuccess(res.data));
      })
      .catch(err => dispatch(fetchMoviesFailure(err)));
  };
};

export const FetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});
