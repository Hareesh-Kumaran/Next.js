import "../../../Styles/PostPage/Post.css";
const MoviePage = async ({ params }) => {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie_ID}?api_key=${process.env.MOVIE_API_KEY}`
  );
  console.log(await response.json());

  return <div classname="Post-container">

  </div>;
};

export default MoviePage;
