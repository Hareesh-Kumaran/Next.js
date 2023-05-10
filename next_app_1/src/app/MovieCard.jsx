"use client"

import Link from "next/link";

const MovieCard = ({ title, release_date: date,id,poster }) => {
  const base_poster_url = "https://image.tmdb.org/t/p/original";
  return (
    <div className="movie-card">
      <Link href={`/${id}`}>
        <h2 className="movie-title">{title}</h2>
        <p className="release-date">Releasing on {date}</p>
        <img src={base_poster_url + poster} className="poster" />
      </Link>
    </div>
  );
};

export default MovieCard;
