import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import CustomPagination from "../../components/pagination/CustomPagination";
import Genres from "../../components/Genres";
import useGenres from "../../components/hooks/useGenres";

import apiService from "../../api/apiService";

function Series() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);
  console.log(genreforURL);

  const getSeries = async () => {
    try {
      const { data } = await apiService.get("discover/tv", {
        config: { language: "en-US", page, with_genres: genreforURL },
      });
      setMovies(data.results);
      console.log("tv", data.results);
      setNumberOfPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    getSeries();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  return (
    <div>
      <span className="pageTitle"> Discover Series</span>
      <Genres
        type="tv"
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
              media_type="tv"
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

export default Series;
