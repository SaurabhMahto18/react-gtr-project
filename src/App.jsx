import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import AlumniSection from "./components/AlumniSection";
import WhereOurStudentWork from "./components/WhereOurStudentWork";
import CourseDetails from "./pages/CourseDetails"; 
import AllCoursesPage from "./pages/AllCoursesPage";
import CourseDetail from "./pages/CourseDetail";

import "./index.css";
import GTRAcademyChatbot from "./components/GTRAcademyChatbot";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CoursesSection />
              <AlumniSection />
              <WhereOurStudentWork />
              {/* <GTRAcademyChatbot/> */}
            </>
          }
        />

        {/* Course details page */}
        <Route path="/courses" element={
          <>
          <CourseDetails /> 
          <WhereOurStudentWork /> 
          </>
        }
        />
        <Route path="/all-courses" element={<AllCoursesPage />} />
        <Route path="/courses/:slug" element={<> <CourseDetail /> <WhereOurStudentWork /> </>} />
      </Routes>
    </Router>
  );
}

export default App;
