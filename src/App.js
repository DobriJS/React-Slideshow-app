import React, { useState } from 'react';
import './style.css';

const slides = [
  {
    title: 'title 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lectus et tortor dapibus volutpat sed sed dui. Aenean pharetra, lacus nec mollis vestibulum, est tortor lacinia dui, nec fringilla lorem massa sed diam. Aliquam id dui in ex vehicula tempor non a neque. Vivamus blandit odio ex, eget pulvinar est eleifend quis. In eros massa, varius vitae vestibulum eu, tristique eu nibh. Duis ut eros in nulla malesuada pulvinar.',
  },
  {
    title: 'title 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lectus et tortor dapibus volutpat sed sed dui. Aenean pharetra, lacus nec mollis vestibulum, est tortor lacinia dui, nec fringilla lorem massa sed diam. Aliquam id dui in ex vehicula tempor non a neque. Vivamus blandit odio ex, eget pulvinar est eleifend quis. In eros massa, varius vitae vestibulum eu, tristique eu nibh. Duis ut eros in nulla malesuada pulvinar.',
  },
  {
    title: 'title 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae lectus et tortor dapibus volutpat sed sed dui. Aenean pharetra, lacus nec mollis vestibulum, est tortor lacinia dui, nec fringilla lorem massa sed diam. Aliquam id dui in ex vehicula tempor non a neque. Vivamus blandit odio ex, eget pulvinar est eleifend quis. In eros massa, varius vitae vestibulum eu, tristique eu nibh. Duis ut eros in nulla malesuada pulvinar.',
  },
];

const initialSlides = 0;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(initialSlides);
  const [isFirstSlide, setIsFirstSlide] = useState(true);
  const [isLastSlide, setIsLastSlide] = useState(false);

  const updateSlide = (nextSlide) => {
    if (nextSlide === 0) {
      setIsFirstSlide(true);
    } else {
      setIsFirstSlide(false);
    }
    if (nextSlide === slides.length - 1) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
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
