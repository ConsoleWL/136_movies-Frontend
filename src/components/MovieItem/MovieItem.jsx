import React, { useState } from "react";
import "./MovieItem.css";

const MovieItem = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handClick = (e) => {
    setIsFavorite(!isFavorite);
  };

  const btnClass = isFavorite ? "active-btn" : "";

  return (
    <div className="movie-item">
      <span>{title}</span>
      <button className={btnClass} onClick={handClick}>
        Favorite
      </button>
    </div>
  );
};

export default MovieItem;
