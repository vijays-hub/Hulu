import requests from "../requests";
import "./Navbar.css";

function Navbar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <h4 onClick={() => setSelectedOption(requests.fetchTrendings)}>
        Trending
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchTopRated)}>
        Top Rated
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Action
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Comedy
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romance
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-Fi</h4>
      <h4 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h4>
      <h4 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animation
      </h4>
      <h4 onClick={() => setSelectedOption(requests.fetchTV)}>TV Movie</h4>
    </div>
  );
}

export default Navbar;
