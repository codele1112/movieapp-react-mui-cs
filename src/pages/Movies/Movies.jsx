import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import CustomPagination from "../../components/pagination/CustomPagination";
import Genres from "../../components/Genres";
import useGenres from "../../components/hooks/useGenres";
import apiService from "../../api/apiService";
// import { BASE_URL } from "../../api/apiconfig";

function Movies() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);
  console.log(genreforURL);

  const getMovies = async () => {
    try {
      const { data } = await apiService.get("discover/movie", {
        config: { language: "en-US", page, with_genres: genreforURL },
      });
      setMovies(data.results);
      console.log("movies", data.results);
      setNumberOfPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getMovies();
    // console.log(BASE_URL);
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle"> Discover Movies</span>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {movies &&
          movies.map((i) => (
            <MovieCard
              key={i.id}
              id={i.id}
              poster={i.poster_path}
              title={i.title || i.name}
              date={i.first_air_date || i.release_date}
              media_type="movie"
              vote_average={i.vote_average}
            />
          ))}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Movies;
