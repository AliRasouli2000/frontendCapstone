import React from 'react'
import { Link } from 'react-router-dom'

export const CourseCard = ({id, level, duration, title, tagline, description, outcomes, project, coursePageName}) => {
  return (
    <article className="course-card">
              <div className="course-card-header">
                <span className="course-badge">{level}</span>
                <span className="course-duration">{duration}</span>
              </div>

              <h3>{title}</h3>
              <p className="course-tagline">{tagline}</p>
              <p className="course-description">{description}</p>

              <ul className="course-outcomes">
                {outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="course-footer">
                <p className="course-project">
                  <span>Hands-on Project:</span> {project}
                </p>
                <Link to={`/courses/${coursePageName}`}>
                <button className="course-btn">Start Course</button>
                </Link>
              </div>
            </article>
  )
}
