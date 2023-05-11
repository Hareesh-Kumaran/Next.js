import "../../../Styles/PostPage/Post.css";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
  );
  const movie = await data.json();
  return movie.results.map(
    (movie)=>{movie_ID:toString(movie.id)}
  )
}

const MoviePage = async ({ params }) => {
  const base_poster_url = "https://image.tmdb.org/t/p/original";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie_ID}?api_key=${process.env.MOVIE_API_KEY}`
  );
  const movie = await response.json();
  console.log("movie", movie);

  return (
    <div className="Post-main-container">
      <div className="Post-wrapper">
        <div className="poster-container">
          <img src={base_poster_url + movie.poster_path} />
        </div>

        <div className="movie-description">
          <p className="movie-title">{movie.original_title}</p>
          <div className="movie-attributes">
            <span class="runtime">Runtime:{movie.runtime} minutes</span>
            <span class="status">{movie.status}</span>
          </div>
          <p className="movie-description">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
