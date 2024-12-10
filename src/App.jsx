import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from "./components/countdown/LandingPage.jsx";
import timer from "../public/timer2.gif";

import { useState, useEffect } from "react";

import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showFirstText, setShowFirstText] = useState(true);

  useEffect(() => {
    // Show the loader for 5 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsTransitioning(true); // Start the ripple transition
    }, 7000);

    // End the ripple transition after 2 seconds
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 8000);

    // Toggle the loading text
    const textTimer = setTimeout(() => {
      setShowFirstText(false);
    }, 5000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(transitionTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div id="loader-screen">
          <div className="loader">
            {showFirstText ? (
              <p className='loading-text text1'>THE STAGE IS SET</p>
            ) : (
              <p className='loading-text text2'>ARE YOU READY ?</p>
            )}
            <img src={timer} alt="Loading..." />
          </div>
        </div>
      )}
      {isTransitioning && <div id="ripple-mask"></div>}
      {!isLoading && !isTransitioning && (
        <div className="main-page">
          <LandingPage />
        </div>
      )}
    </div>
  );
}

export default App;


