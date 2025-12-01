import { useState } from 'react'
import './App.css'
import HomePage from './pages/home/HomePage.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import CoursesPage from './pages/courses/CoursesPage.jsx';
import FlashCardsPage from './pages/flashCards/FlashCardsPage.jsx';
import MiniGamesPage from './pages/miniGames/MiniGamesPage.jsx';
import ProgressPage from './pages/progress/ProgressPage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import BugFix from './pages/miniGames/BugFix.jsx';
import TypingSpeed from './pages/miniGames/TypingSpeed.jsx';
import {EachCoursePage} from "./pages/courses/EachCoursePage.jsx"
import {htmlCourseData, cssCourseData, jsCourseData} from './pages/courses/CourseData.jsx'
import { LoginSignUp } from './pages/LoginSignUp/LoginSignUp.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginSignUp />} />
      <Route path='courses' element={<CoursesPage />} >
        <Route 
        path='htmlCourse' 
        element={<EachCoursePage courseData={htmlCourseData} />} />
        <Route 
        path='cssCourse' 
        element={<EachCoursePage courseData={cssCourseData} />} />
        <Route 
        path='javaScriptCourse' 
        element={<EachCoursePage courseData={jsCourseData} />} />
      </Route>
      <Route path='flashcards' element={<FlashCardsPage />} />
      <Route path='minigames' element={<MiniGamesPage />} >
        <Route path='bugfix' element={<BugFix />} />
        <Route path='typingspeed' element={<TypingSpeed />} />
      </Route>
      <Route path='progress' element={<ProgressPage />} />
      <Route path='about' element={<AboutPage />} />
    </Route>
  )
)

function App() {
  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App

