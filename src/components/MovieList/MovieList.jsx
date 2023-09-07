const MovieList = ({}) => {
  const movies = [
    "Princess",
    "Forrest Gump",
    "Iron Man",
    "Pulp Fiction",
    "Home Alone 3",
  ];
  const movieItems = movies.map((movie) => <div>{movie}</div>);
  return (
    <div>
      <h4>My Movies</h4>
      <div>{movieItems}</div>
    </div>
  );
};

export default MovieList;
