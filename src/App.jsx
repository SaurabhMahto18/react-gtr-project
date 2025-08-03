import react from 'react'
import NavBar from './NavBar.jsx'
import './index.css';
import HeroSection from './HeroSection.jsx';
import { CoursesSection } from './CoursesSection.jsx';
import AlumniSection from './AlumniSection.jsx'
import {WhereOurStudentWork} from './WhereOurStudentWork.jsx';



// import AlumniSection from './AlumniSection.jsx';
function App() {
  

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <CoursesSection/>
      <AlumniSection/>
      <WhereOurStudentWork/>
    </>
  )
}

export default App
