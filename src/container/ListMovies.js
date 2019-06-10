import React from "react";
import { connect } from "react-redux";
const ListMovies = ({ movies }) => {
  return (
    <div>
      <h2>Esperando la ultima ola</h2>
      <ul>
        {movies.map(movie => (
          <p key={movie.id}>{movie.title}</p>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};

export default connect(mapStateToProps)(ListMovies);
