import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Results from './Results/Results';
import requests from './requests'
import { useEffect, useState } from 'react';
import Loader from './Loader';

function App() {

  // Now when the page loads, it fetches all the trending movies and displays in the landing page!
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrendings)
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    setTimeout(() => { setShowLoader(false) }, 2000)
  })

  return (
    <div className="app">
      {showLoader ? <Loader /> : <> <Header setSelectedOption={setSelectedOption}></Header>
        <Navbar setSelectedOption={setSelectedOption}></Navbar>
        <Results selectedOption={selectedOption}></Results></>}
    </div>
  );
}

export default App;
