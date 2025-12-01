import React from 'react'
import FlashCardCard from '../../flashCards/FlashCardCard.jsx'
import { flashCardList } from '../../flashCards/FlashCardList.jsx'
import '../../flashCards/FlashCardsPage.css'
import './FlashCards.css'

export const FlashCards = ({courseData}) => {

  const data = courseData.flashcards

  return (
    <div className="flashcards-container">
      <div className="flashcards-grid">
        {flashCardList.filter((card, idx) => (idx <= data.endIndex && idx >= data.startIndex)).map((card) => 
          <FlashCardCard key={card.front} front={card.front} back={card.back} />
        )}
      </div>
    </div>
  )
}
