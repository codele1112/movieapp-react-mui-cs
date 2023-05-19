import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_BASE_URL: "https://api.themoviedb.org/3/",
      REACT_APP_API_KEY: "f0298014adf1063510cc70ff5e7a4ff1",
      REACT_APP_IMG300_URL: "https://image.tmdb.org/t/p/w300",
      REACT_APP_IMG500_URL: "https://image.tmdb.org/t/p/w500",

      REACT_APP_UNAVAILABLE_IMG:
        "https://movienewz.com/img/films/poster-holder.jpg",
    },
  },
});
