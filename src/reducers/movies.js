const movies = (state = [], action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return state.concat({
        id: action.id,
        title: action.title,
        description: action.description
      });
    default:
      return state;
  }
};

export default movies;
