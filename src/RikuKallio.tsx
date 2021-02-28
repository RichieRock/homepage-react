import React from "react";

// Modules
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import WorkExperience from "components/WorkExperience";
import Intro from "components/Intro";
import Tech from "components/Tech";
import Education from "components/Education";

const RikuKallio = () => {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <div id="intro">
          <Intro />
        </div>
        <div id="tech">
          <Tech />
        </div>
        <div id="work">
          <WorkExperience />
        </div>
        <div id="education">
          <Education />
        </div>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default RikuKallio