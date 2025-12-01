import './HomePage.css';
import { useContext } from 'react';
import ProgressContext from '../../contexts/ProgressContext';
import { useNavigate } from 'react-router-dom';

const GameCard = ({path, title, description}) => {

  const {userData} = useContext(ProgressContext)
  const {loggedIn} = userData
  const navigate = useNavigate()

  const handleClick = () => {
    if (!loggedIn) {
      navigate("login")
    }
    if (loggedIn) {
      navigate(`minigames/${path}`)
    }
  }

  return (
    <div className="game-card">
      <h4>{title}</h4>
      <p>{description}</p>
      <button onClick={handleClick}>Play Now</button>
    </div>
  )
}

export default GameCard
