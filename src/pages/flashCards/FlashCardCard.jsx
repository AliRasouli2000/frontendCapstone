import React from "react";
import "./FlashCardsPage.css";
import {useState} from 'react';

const FlashCardCard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flashcard-card ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped(prev => !prev)}
    >
      <div className="flashcard-inner">
        <div className="flashcard-face flashcard-front">
          {front}
        </div>
        <div className="flashcard-face flashcard-back">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlashCardCard;
