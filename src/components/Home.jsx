import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import StudyMaterials from './StudyMaterials'
import Semester3 from '../Semesters/Semester3'
import Footer from './Footer'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <StudyMaterials/>
      <Contact/>
    </div>
  )
}

export default Home