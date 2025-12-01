import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="about-tagline">About this project</p>
          <h1 className="about-title">Front-End Learning Hub</h1>
          <p className="about-subtitle">
            A capstone project built to teach HTML, CSS, and JavaScript through
            interactive lessons, flashcards, and mini games — while showcasing
            clean, modern front-end development.
          </p>
        </div>
      </section>

      <section className="about-main">
        <div className="about-grid">
          <div className="about-card">
            <h2>Why I Built This</h2>
            <p>
              This website is my front-end capstone project. I wanted to create
              something more than a simple landing page — a full learning
              experience that demonstrates real-world UI design, component
              structure, state management, and reusable styling.
            </p>
          </div>

          <div className="about-card">
            <h2>What You&apos;ll Find</h2>
            <ul className="about-list">
              <li>Structured HTML, CSS, and JavaScript courses</li>
              <li>Interactive flashcards to review key concepts</li>
              <li>Mini games for short, timed study breaks</li>
              <li>Clean, responsive layouts and animations</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>Skills Showcased</h2>
            <ul className="about-list">
              <li>React components and props</li>
              <li>Reusable, modular CSS styling</li>
              <li>Responsive layouts with Flexbox/Grid</li>
              <li>Interactive UI with JavaScript logic</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>My Goal</h2>
            <p>
              My goal is to make front-end basics feel approachable and fun,
              while also showing that I can design, build, and polish a complete
              front-end project from scratch — the kind of work I aim to do in
              my future software engineering roles.
            </p>
          </div>
        </div>
      </section>

      <section className="about-footer-note">
        <p>
          This project is constantly evolving. As I learn new techniques and
          tools, I&apos;ll keep improving the design, features, and learning
          experience.
        </p>
      </section>
    </main>
  );
};

export default AboutPage;
