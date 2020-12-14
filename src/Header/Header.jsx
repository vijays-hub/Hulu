import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import requests from "../requests";
import "./Header.css";

function Header({ setSelectedOption }) {
  return (
    <div className="header">
      <img
        src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        alt="logo"
        className="header__logo"
        onClick={() => setSelectedOption(requests.fetchTrendings)}
      />
      <div className="header__icons">
        {/* header__icon--active --> Modifier to make it selected */}
        <div
          className="header__icon header__icon--active"
          onClick={() => setSelectedOption(requests.fetchTopRated)}
        >
          <Home /> <p>Home</p>
        </div>
        <div
          className="header__icon"
          onClick={() => setSelectedOption(requests.fetchTrendings)}
        >
          <FlashOn /> <p>Trending</p>
        </div>
        <div
          className="header__icon"
          onClick={() => setSelectedOption(requests.fetchTV)}
        >
          <LiveTv />
          <p>Verified</p>
        </div>
        <div
          className="header__icon"
          onClick={() => setSelectedOption(requests.fetchTopRated)}
        >
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
