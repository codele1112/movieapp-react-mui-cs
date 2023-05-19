import { Badge } from "@mui/material";
import { API_IMG_300, unavailable } from "../api/apiconfig";
import "./MovieCard.css";
import ContentModal from "./modal/ContentModal";

function MovieCard({ id, poster, title, date, media_type, vote_average }) {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? API_IMG_300 + poster : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
}

export default MovieCard;
