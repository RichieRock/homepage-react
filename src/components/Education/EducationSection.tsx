import { Language, languages } from 'data/languages'
import React from 'react'

import { educations } from '../../data/educations'
import EducationComponent from './EducationComponent'

const EducationSection = () => {
  return (
    <section className="relative block bg-indigo-900">
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
            className="text-indigo-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 py-20 lg:pb-52">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white pb-6">
              Education
            </h2>
          </div>
        </div>
        <div className="text-white flex flex-wrap justify-center">
          {educations.map(education => (
            <EducationComponent key={education.name} education={education} />
          ))}
        </div>
        <div className="text-white flex flex-wrap mt-12 justify-center">
          <div className="px-4 w-full">
            <h2 className="text-center text-4xl font-semibold text-white pb-6">
              Languages
            </h2>
          </div>
          <div className="px-4 grid grid-cols-1 lg:grid-flow-col gap-10">
            {languages.map((lang: Language) => (
              <div className="" key={lang.name}>
                <div className="text-2xl font-light">{lang.name}</div>
                <div className="uppercase text-sm font-semibold">
                  {lang.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
