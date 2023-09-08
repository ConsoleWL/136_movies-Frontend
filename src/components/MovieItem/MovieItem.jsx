const MovieItem = ({ title }) => {
  const handClick = (e) => {
    console.log(e);
  };

  return (
    <div className="movie-item">
      <span>{title}</span>
      <button onClick={handClick}>Favorite</button>
    </div>
  );
};

export default MovieItem;
