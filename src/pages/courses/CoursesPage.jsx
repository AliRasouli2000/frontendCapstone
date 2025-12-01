import React from "react";
import "./CoursesPage.css";
import { courseList } from "./CourseList";
import {Link, Outlet, useLocation} from 'react-router-dom'; 
import {CourseCard} from './CourseCard.jsx';

const CoursesPage = () => {
  const location = useLocation()
  const isCourseRoute = location.pathname !== "/courses"

  return (
    <div className="courses-page">
      {!isCourseRoute && <div> 
        <section className="courses-hero">
        <div className="courses-hero-content">
          <h1>Our Courses</h1>
          <p>
            Learn HTML, CSS, and JavaScript step-by-step — with short lessons,
            mini projects, and games to keep you motivated.
          </p>
        </div>
      </section>

      <section className="courses-section">
        <div className="courses-section-header">
          <h2>Choose Your Learning Path</h2>
          <p>
            Start from the basics and move toward building interactive,
            professional-looking web pages.
          </p>
        </div>

        <div className="courses-grid">
          {courseList.map((course) => (
            <CourseCard key={course.id} id={course.id} level={course.level} duration={course.duration} title={course.title} tagline={course.tagline} description={course.description} outcomes={course.outcomes} project={course.project} coursePageName={course.coursePageName} />
          ))}
        </div>
      </section>
      </div>}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default CoursesPage;
