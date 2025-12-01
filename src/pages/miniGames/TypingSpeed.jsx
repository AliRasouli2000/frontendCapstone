import React from 'react'
import {codeSnippets} from "./CodeSnippets.jsx"
import {useState, useEffect} from 'react';
import './TypingSpeed.css';

const TypingSpeed = () => {
  const [input, setInput] = useState('');
  const [snippet, setSnippet] = useState(codeSnippets[Math.floor(Math.random() * 10)].code); 
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      if (startTime) {
        const elapsed = (Date.now() - startTime) / 1000;
        setTime(elapsed);
      }
    }, 100); // Update every 100ms for smooth decimal display

    return () => clearInterval(id);
  }, [isRunning, startTime])


  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  
    if (!isRunning && !isFinished) {
      setIsRunning(true);
      setStartTime(Date.now());
    }
  
    // USE value here, not input
    if (value === snippet && !isFinished) {
      const finalTime = startTime ? (Date.now() - startTime) / 1000 : time;
      setTime(finalTime);
      setIsFinished(true);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setInput('');
    setSnippet(codeSnippets[Math.floor(Math.random() * 10)].code);
    setTime(0);
    setStartTime(null);
    setIsRunning(false);
    setIsFinished(false);
  }

  return (
    <div className="typing-page">
      <div className="typing-container">
        <div className="typing-header">
          <h1>Typing Speed Challenge</h1>
          <p>Test your typing speed and accuracy. Practice coding-related text to enhance your programming efficiency.</p>
          <p>Rewrite the code snippet in the input box below. Let's see how long it takes you to get it right!</p>
        </div>

        <div className="typing-card">
          <div className="typing-code-section">
            <p className="typing-code-display">{snippet}</p>
          </div>
          
          <div className="typing-input-section">
            <input 
              type="text" 
              value={input} 
              onChange={handleChange} 
              disabled={isFinished}
              placeholder="Start typing the code above..."
            />
          </div>

          {!isFinished && (
            <p className="typing-time">Time: {time.toFixed(2)} seconds</p>
          )}
          
          {isFinished && (
            <p className="typing-success">Well done! You finished in {time.toFixed(2)} seconds!</p>
          )}

          <div className="typing-button-section">
            <button onClick={handleReset} className="typing-button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypingSpeed
