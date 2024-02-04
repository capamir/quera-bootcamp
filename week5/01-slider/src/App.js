import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const findPrevIndex = (currentIndex) =>
  currentIndex === 1 ? data.length : currentIndex - 1;

const findNextIndex = (currentIndex) =>
  currentIndex === data.length ? 1 : currentIndex + 1;

function App() {
  const [index, setIndex] = useState(1);

  const handlePrev = () => {
    setIndex((prevIndex) => findPrevIndex(prevIndex));
  };

  const handleNext = () => {
    setIndex((prevIndex) => findNextIndex(prevIndex));
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>slider
        </h2>
      </div>
      <div className="section-center">
        {data.map((person) => (
          <article
            className={
              person.id === findPrevIndex(index)
                ? "lastSlide"
                : person.id === index
                ? "activeSlide"
                : person.id === findNextIndex(index)
                ? "nextSlide"
                : ""
            }
            key={person.id}
          >
            <img className="person-img" alt="img" src={person.image} />
            <h4>{person.name}</h4>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        ))}
        <button className="prev" aria-label="prev" onClick={handlePrev}>
          <FiChevronLeft />
        </button>
        <button className="next" aria-label="next" onClick={handleNext}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
