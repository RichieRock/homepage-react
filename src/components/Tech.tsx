import React from 'react'

import { experienceYears } from '../data/techExperiences'
import { getYears } from '../util'

const Tech = () => {
  return (
    <section className="pb-10 relative block bg-gray-900">
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
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              Technology stack
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              As a fullstack developer with focus on the frontend, my main
              expertise lies in frontend frameworks but I&lsquo;m also very
              fluent with Java, node.js and typescript on the backend
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-js-square text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              JS HTML CSS
            </h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.js, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-angular text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Angular</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.angular, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-react text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">React</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.react, true)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-java text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Java</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.java, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-node text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Node.js</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.node, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fas fa-cloud text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              Azure/AWS/GCP
            </h6>
            <p className="mt-2 mb-4 text-gray-500">
              {Math.max(
                getYears(experienceYears.azure),
                getYears(experienceYears.aws),
                getYears(experienceYears.googlecloud)
              )}{' '}
              years
            </p>
          </div>
        </div>
        <div className="flex flex-wrap text-center justify-center mt-10">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">Other</h2>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-git text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Git</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.git, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fas fa-circle-notch text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Scrum</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.scrum, true)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:mt-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-windows text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Windows</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.windows, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-linux text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">Linux</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.linux, true)}
            </p>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
              <i className="fab fa-apple text-5xl"></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">MacOs</h6>
            <p className="mt-2 mb-4 text-gray-500">
              {getYears(experienceYears.mac, true)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech
