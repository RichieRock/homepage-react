import { WorkExperience, workExperiences } from 'data/workExperiences'
import React from 'react'

import ExperienceComponent from './ExperienceComponent'

const WorkExperienceSection = () => {
  return (
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-center w-full text-3xl font-semibold">
          Working experience
        </h2>
        <div className="divide-y divide-blue-100 divide-opacity-60 space-y-10">
          {workExperiences.map((workExperience: WorkExperience, i: number) => (
            <ExperienceComponent
              key={'exp-' + i}
              workExperience={workExperience}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperienceSection
