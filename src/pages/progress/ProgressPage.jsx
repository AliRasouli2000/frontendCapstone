import React from 'react'
import { useContext} from 'react'
import ProgressContext from '../../contexts/ProgressContext'
import './ProgressPage.css'

const ProgressPage = () => {
  const {userData} = useContext(ProgressContext)
  const {username} = userData
  
  const QUIZ_TOTAL = 10;
  
  const getScoreDisplay = (score) => {
    if (!score || score === "") {
      return "Not completed";
    }
    return `${score}/${QUIZ_TOTAL}`;
  };

  return (
    <div className="progress-page-container">
      <div className="progress-content">
        <h1 className="progress-title">Welcome {username}! Your Quiz Score are here</h1>
        
        <div className="scores-grid">
          <div className="score-card">
            <div className="score-course">HTML</div>
            <div className={`score-value ${!userData.htmlQuizScore || userData.htmlQuizScore === "" ? "not-completed" : ""}`}>
              {getScoreDisplay(userData.htmlQuizScore)}
            </div>
          </div>
          
          <div className="score-card">
            <div className="score-course">CSS</div>
            <div className={`score-value ${!userData.cssQuizScore || userData.cssQuizScore === "" ? "not-completed" : ""}`}>
              {getScoreDisplay(userData.cssQuizScore)}
            </div>
          </div>
          
          <div className="score-card">
            <div className="score-course">JavaScript</div>
            <div className={`score-value ${!userData.JSQuizScore || userData.JSQuizScore === "" ? "not-completed" : ""}`}>
              {getScoreDisplay(userData.JSQuizScore)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressPage;
