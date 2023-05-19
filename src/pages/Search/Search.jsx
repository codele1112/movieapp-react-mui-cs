import { useState, useEffect } from "react";
import axios from "axios";

import { Button, Tab, Tabs, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MovieCard from "../../components/MovieCard";
import CustomPagination from "../../components/pagination/CustomPagination";

function Search() {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();

  const getSearchMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=f0298014adf1063510cc70ff5e7a4ff1&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setMovies(data.results);

      console.log("dataSearch", data.results);

      setNumberOfPages(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getSearchMovies();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          label="Search"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          onClick={getSearchMovies}
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
      <Tabs
        value={type}
        textColor="primary"
        onChange={(e, newValue) => {
          setType(newValue);
          setPage(page);
        }}
        style={{ paddingBottom: 5 }}
        aria-label="disable tabs example"
      >
        <Tab style={{ width: "50%" }} label="Search Movies" />
        <Tab style={{ width: "50%" }} label="Search TV Series" />
      </Tabs>

      <div className="trending">
        {movies &&
          movies.map((i) => (
            <MovieCard
              key={i.id}
              id={i.id}
              poster={i.poster_path}
              title={i.title || i.name}
              date={i.first_air_date || i.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={i.vote_average}
            />
          ))}
        {searchText &&
          !movies.length &&
          (type ? <h3>No Series Found</h3> : <h3>No Movies Found</h3>)}
      </div>
      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </div>
  );
}

export default Search;
