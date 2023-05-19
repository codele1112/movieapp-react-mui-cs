function useGenres(selectedGenres) {
  if (selectedGenres.length < 1) return "";
  const GenresName = selectedGenres.map((g) => g.id);
  return GenresName.reduce((acc, curr) => acc + "," + curr);
}

export default useGenres;
