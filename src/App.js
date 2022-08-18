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
  };

  return <div className="app"></div>;
}
