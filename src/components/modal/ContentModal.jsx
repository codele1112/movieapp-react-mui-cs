/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import apiService from "../../api/apiService";
import "./ContentModal.css";
import { API_IMG_300, API_IMG_500, unavailable } from "../../api/apiconfig";

export default function ContentModal({ children, media_type, id }) {
  const [content, setContent] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [video, setVideo] = useState();

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const getMoviesDetail = async () => {
    try {
      const { data } = await apiService.get(`${media_type}/${id}`, {
        config: { language: "en-US" },
      });
      setContent(data);
      console.log("movie detail", data);
    } catch (error) {
      console.log(error);
    }
  };

  const getVideo = async () => {
    try {
      const { data } = await apiService.get(`${media_type}/${id}/videos`, {
        config: { language: "en-US" },
      });
      setVideo(data.results[0]?.key);
      console.log("video key", data.results[0]?.key);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoviesDetail();
    getVideo();
  }, [id, media_type]);

  return (
    <div>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
        onClick={handleOpen}
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {content && (
            <div className="modalBox">
              <div className="content-modal">
                <img
                  src={
                    content.poster_path
                      ? `${API_IMG_300}/${content.poster_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="content-modal-portrait"
                />
                <img
                  src={
                    content.backdrop_path
                      ? `${API_IMG_500}/${content.backdrop_path}`
                      : unavailable
                  }
                  alt={content.name || content.title}
                  className="content-modal-landscape"
                />
                <div className="content-modal-about">
                  <span className="content-modal-title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="content-modal-description">
                    {content.overview}
                  </span>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
