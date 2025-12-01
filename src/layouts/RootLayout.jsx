import { NavLink, Outlet } from 'react-router-dom'
import {useEffect, useState} from 'react'
import './RootLayout.css'
import ProgressContext from "../contexts/ProgressContext"
import { useNavigate } from 'react-router-dom'

const RootLayout = () => {

  const [userData, setUserData] = useState(() => {
    const defaultUserData = {
      username: "",
      email: "",
      password: "",
      htmlQuizScore: "",
      cssQuizScore: "",
      JSQuizScore: "",
      loggedIn: false,
    };

    try {
      const saved = localStorage.getItem("data");
      if (saved && saved !== "undefined" && saved !== "null") {
        return JSON.parse(saved);
      }
    } catch (error) {
      return defaultUserData;
    }

    return defaultUserData;
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(userData));
  }, [userData]);

  const navigate = useNavigate()

  const loggedIn = userData.loggedIn;
  const username = userData.username;

  const handleLogout = () => {
    setUserData({...userData, loggedIn: false})
    navigate("login")
  }


  return (
    <ProgressContext.Provider value={{userData, setUserData}}>
      <div className="root-layout">
        <header>
          <nav className="navbar">
            <div className="logo">CodeLearn</div>
            <div className="nav-links">
              
              {!loggedIn && <NavLink to="/login">Login / Sign Up</NavLink>}
              {loggedIn && (
                <>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/courses">Courses</NavLink>
                  <NavLink to="/flashcards">Flash Cards</NavLink>
                  <NavLink to="/minigames">Mini Games</NavLink>
                  <NavLink to="/progress">Progress</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <p className="welcome-text">
                    Hi, {username}
                  </p>
                  <button className="logout-button" onClick={handleLogout}>Logout</button>
                </>
              )}
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ProgressContext.Provider>
  )
}

export default RootLayout
