import React from 'react';
import '../styles/movie.css';

export default function Movie({ movieImage, title, star }) {
  return (
    <div className="movieBox">
      <img src={movieImage} alt={title} className="movieImage" />
      <div className="movieText">
        <div className="title">{title}</div>
        <div className="star">{star}</div>
      </div>
    </div>
  );
}
