// const BASE_URL = "https://api.themoviedb.org/3/movie/";
// const TMDB_KEY = "f0298014adf1063510cc70ff5e7a4ff1";

// Trending : https://api.themoviedb.org/3/trending/all/day?api_key=f0298014adf1063510cc70ff5e7a4ff1
// series : https://api.themoviedb.org/3/discover/tv?api_key=f0298014adf1063510cc70ff5e7a4ff1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759
// movies : https://api.themoviedb.org/3/discover/movie?api_key=f0298014adf1063510cc70ff5e7a4ff1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10759

export const unavailable = process.env.REACT_APP_UNAVAILABLE_IMG;

export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const API_IMG_300 = process.env.REACT_APP_IMG300_URL;
export const API_IMG_500 = process.env.REACT_APP_IMG500_URL;
