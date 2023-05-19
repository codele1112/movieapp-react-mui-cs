import { useEffect } from "react";

import Chip from "@mui/material/Chip";

import apiService from "../api/apiService";
function Genres({
  type,
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  useEffect(() => {
    const getGenres = async () => {
      try {
        const { data } = await apiService.get(`genre/${type}/list`);

        setGenres(data.genres);
        console.log("genres", data.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getGenres();

    return () => {
      setGenres({});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          color="primary"
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          key={genre.id}
          label={genre.name}
          style={{ margin: 2 }}
          size="small"
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
}

export default Genres;
