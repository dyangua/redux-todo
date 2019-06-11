import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../actions";

class ListMovies extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { movies, loading } = this.props;

    return (
      <div>
        <h2>Esperando la ultima ola</h2>
        {loading && <p>loading...</p>}
        <ul>
          {movies && movies.map(movie => <p key={movie.id}>{movie.title}</p>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies,
    loading: state.moviesReducer.loading,
    error: state.moviesReducer.error
  };
};

export default connect(mapStateToProps)(ListMovies);
