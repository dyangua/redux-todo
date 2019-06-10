export const addMovie = movie => ({
  type: "ADD_MOVIE",
  id: movie.id,
  title: movie.title,
  description: movie.description
});
