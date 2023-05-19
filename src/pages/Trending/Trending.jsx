import "./trending.css";
import apiService from "../../api/apiService";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard";
import CustomPagination from "../../components/pagination/CustomPagination";

function Trending() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      try {
        const { data } = await apiService.get("trending/all/day", {
          config: { language: "en-US", page },
        });

        setMovies(data.results);
        console.log("trending", data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getTrending();
  }, [page]);
  return (
    <div>
      <span className="pageTitle">Trending today</span>
      <div className="trending">
        {movies &&
          movies.map((i) => (
            <MovieCard
              key={i.id}
              id={i.id}
              poster={i.poster_path}
              title={i.title || i.name}
              date={i.first_air_date || i.release_date}
              media_type={i.media_type}
              vote_average={i.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
