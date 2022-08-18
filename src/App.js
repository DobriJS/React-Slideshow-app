import React, { useState } from 'react';
import { slides, initialSlides } from './slidesData';
import './style.css';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(initialSlides);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const updateSlide = (nextSlide) => {
    nextSlide === 0 ? setIsFirstSlide(true) : setIsFirstSlide(false);
    nextSlide === slides.length - 1
      ? setIsLastSlide(true)
      : setIsLastSlide(false);
    setCurrentSlide(nextSlide);
  };
  
  return (
    <div className="app">
      <div>
        <button
          disabled={currentSlide === initialSlides}
          onClick={() => updateSlide(initialSlides)}
        >
          Restart
        </button>
        <button
          disabled={isFirstSlide}
          onClick={() => updateSlide(currentSlide - 1)}
        >
          Prev
        </button>
        <button
          disabled={isLastSlide}
          onClick={() => updateSlide(currentSlide + 1)}
        >
          Next
        </button>
        <div>
          <br />
          <div>{slides[currentSlide].title}</div>
          <br />
          <div>{slides[currentSlide].text}</div>
        </div>
      </div>
    </div>
  );
}
