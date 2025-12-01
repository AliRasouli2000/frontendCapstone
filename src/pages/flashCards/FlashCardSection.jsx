import React from 'react'
import FlashCardCard from './FlashCardCard'
import { flashCardList } from './FlashCardList';
import "./FlashCardsPage.css";

const FlashCardSection = () => {
  return (
    <div className="flashcards-grid">
      {flashCardList.map((card) => <FlashCardCard front={card.front} back={card.back} />)}
    </div>
  )
}

export default FlashCardSection
