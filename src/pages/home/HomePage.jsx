import "./HomePage.css";
import Courses from "./Courses.jsx";
import Games from "./Games.jsx";
import {CatFacts} from "./CatFacts.jsx"

export default function HomePage() {
  return (
    <div className="home-container">
      {/* header */}
      <header className="hero">
        <h1>Welcome to CodeLearn</h1>
        <p>Learn HTML, CSS, and JavaScript interactively — and take short fun breaks with our mini games!</p>
        <a href="#courses" className="cta-btn">Start Learning</a>
      </header>

      <CatFacts />

      <Courses />

      <Games />

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CodeLearn. All rights reserved.</p>
      </footer>
    </div>
  );
}

