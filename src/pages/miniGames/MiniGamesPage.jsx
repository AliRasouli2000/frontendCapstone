import React from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import './MiniGamesPage.css'
import { GamesList } from './GamesList'
import MiniGamesCard from './MiniGamesCard'

const MiniGamesPage = () => {
  const location = useLocation()
  const isGameRoute = location.pathname !== '/minigames'
  
  return (
    <div className="minigames-page">
      <div className="minigames-container">
        {!isGameRoute && (
          <>
            <div className="minigames-header">
              <h1>Mini Games</h1>
              <p>Challenge yourself with fun and educational coding games. Improve your skills while having fun!</p>
            </div>
            <div className="minigames-grid">
              {GamesList.map((game) => (
                <MiniGamesCard key={game.id} id={game.id} title={game.title} description={game.description} route={game.route} />
              ))}
            </div>
          </>
        )}
        <Outlet />
      </div>
    </div>
  )
}

export default MiniGamesPage
