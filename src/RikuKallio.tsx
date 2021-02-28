import EducationSection from 'components/Education/EducationSection'
import Intro from 'components/Intro'
import Tech from 'components/Tech'
import WorkExperienceSection from 'components/WorkExperience/WorkExperienceSection'
import React from 'react'

import Footer from './components/Footer'
// Modules
import Navbar from './components/Navbar/Navbar'

const RikuKallio = () => {
  return (
    <>
      <Navbar transparent />
      <main id="top" className="profile-page">
        <div id="intro">
          <Intro />
        </div>
        <div id="tech">
          <Tech />
        </div>
        <div id="work">
          <WorkExperienceSection />
        </div>
        <div id="education">
          <EducationSection />
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default RikuKallio
