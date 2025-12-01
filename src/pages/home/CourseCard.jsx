import './HomePage.css';
import { useContext } from 'react';
import ProgressContext from '../../contexts/ProgressContext';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({path, title, description}) => {

  const {userData} = useContext(ProgressContext)
  const {loggedIn} = userData
  const navigate = useNavigate()

  const handleClick = () => {
    if (!loggedIn) {
      navigate("login")
    }
    if (loggedIn) {
      navigate(`courses/${path}`)
    }
  
  }
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleClick}>Start Course</button>
    </div>
  )
}

export default CourseCard
