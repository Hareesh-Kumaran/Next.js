/*
Note:
      It is server component for better SEO we need it as a pre-rendered data , instead of fetching it in useEffect.
*/
import '../../Styles/Home/home.css';
import MovieCard from "./MovieCard";

const Home = async () => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}`
  );
  const movie = await data.json();
  // console.log(movie.results);
  return (
    <div className='list-container'>
      <h1 className='title'>Movie Maniac</h1>
      <div className='movie-container'>
        {movie.results.map((item) => (
          <MovieCard
            title={item.title}
            release_date={item.release_date}
            id={item.id}
            description={item.overview}
            poster={item.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
