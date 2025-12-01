import React from 'react';
import './EachCoursePage.css';
import {useState} from "react";
import { Video } from './courseSections/Video';
import {QuizPage} from './courseSections/quiz/QuizPage';
import { FlashCards } from './courseSections/FlashCards';


export const EachCoursePage = ({courseData}) => {

  const [pageNum, setPageNum] = useState(0);
  const pageList = ["Video", "FlashCards", "Quizes"];

  const data = courseData;

  const handleNextClick = () => {
    if (pageNum < pageList.length - 1) {
      setPageNum(num => num + 1);
    }
  }

  const handlePrevClick = () => {
    if (pageNum > 0) {
      setPageNum (num => num -1 );
    }
  }
  return (
    <div className="course-page">
      <section className="course-hero">
        <div className="course-hero-content">
          <h1>{data.hero.title}</h1>
          <p>{data.hero.subtitle}</p>
        </div>
      </section>

      <section className="course-content-section">
        <div className="intro-text">
          <p>{data.intro}</p>
        </div>

        <div className="page-navigation">
          <button 
            className="nav-button prev-button" 
            onClick={handlePrevClick} 
            disabled={pageNum <= 0}
          >
            ← Previous Page
          </button>
          <div className="page-indicator">
            Page {pageNum + 1} of {pageList.length}
          </div>
          <button 
            className="nav-button next-button" 
            onClick={handleNextClick} 
            disabled={pageNum >= pageList.length - 1}
          >
            {pageNum >= pageList.length - 1 ? "Last Page" : "Next Page →"}
          </button>
        </div>
        <div className="course-content">
          {pageList[pageNum] === "Video" && <Video courseData={courseData} />}
          {pageList[pageNum] === "Quizes" && <QuizPage courseData={courseData} />}
          {pageList[pageNum] === "FlashCards" && <FlashCards courseData={courseData} />}
        </div>
      </section>
    </div>
  )
};
