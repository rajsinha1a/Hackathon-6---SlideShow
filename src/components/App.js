import React, { Component, useState } from "react";
import "../styles/App.css";

const App = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const handleRestart = () => {
    setIndex(0);
  };
  const handlePrevClick = () => {
    if (index === 0) {
      return;
    }
    setIndex(index - 1);
  };
  const handleNextClick = () => {
    if (index === slides.length - 1) {
      return;
    }
    setIndex(index + 1);
  };

  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button
        data-testid="button-restart"
        disabled={index === 0 ? true : false}
        onClick={handleRestart}
      >
        Restart
      </button>
      <button
        data-testid="button-prev"
        disabled={index === 0 ? true : false}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={index !== slides.length - 1 ? false : true}
        onClick={handleNextClick}
      >
        Next
      </button>
    </>
  );
};

export default App;