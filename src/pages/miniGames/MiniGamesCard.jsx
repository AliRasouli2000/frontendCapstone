import { Link } from 'react-router-dom'

const MiniGamesCard = ({id, title, description, route}) => {
  return (
    <div className="minigames-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={route}>
        <button className="minigames-play-button">Play</button>
        </Link>
    </div>
  )
}

export default MiniGamesCard