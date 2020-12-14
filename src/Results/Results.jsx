import { useEffect, useState } from "react";
import VideoCard from "../VideoCards/VideoCard";
import "./Results.css";
import Axios from "../axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get(selectedOption);
      console.log("Movies -->", response.data.results);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => {
          return <VideoCard key={movie.id} movie={movie} />;
        })}
      </FlipMove>
    </div>
  );
};

export default Results;
