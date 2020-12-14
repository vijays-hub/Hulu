import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
import { forwardRef } from "react";

// The BaseURL for every movie image given by TMDb
const baseURL = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      {/* in case Backdrop Path doesnt exists, look out for the poster Path for the image */}
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path} `}
        alt="Poster"
      />
      <div className="videoCard__info">
        <TextTruncate
          line={2}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
        <h2>{movie.title || movie.original_name || movie.original_title}</h2>
        <p style={{ color: "#FFCB2C" }} className="videoCard__stats">
          {movie.release_date || movie.first_air_date} &nbsp; || &nbsp;
          <ThumbUpSharp /> {movie.vote_count} &nbsp; || &nbsp; IMDb :{" "}
          {movie.vote_average}
        </p>
      </div>
    </div>
  );
});

export default VideoCard;
