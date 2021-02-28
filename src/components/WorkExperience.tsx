import React from 'react'

// companies
import compile from 'assets/img/compile.png'
import visma from 'assets/img/visma.jpg'
import zef from 'assets/img/zef.png'
import vaisala from 'assets/img/vaisala.jpg'
import octo3 from 'assets/img/octo3.png'
import oulu_university from 'assets/img/oulu_university.svg'

const WorkExperience = () => {
    return (
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
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
            <h2 className="text-center w-full text-3xl font-semibold">Working experience</h2>
            <div className="divide-y divide-blue-100 divide-opacity-60 space-y-10">
              <div className="pt-10 items-center flex flex-wrap">
                <div className="w-full md:w-3/12 ml-auto mr-auto px-4">
                  <img
                    alt="Compile Oy"
                    className="max-w-210-px lg:max-w-full"
                    src={compile}
                  />
                  <div className="mt-4 leading-relaxed text-gray-500">
                    Walk the talk
                    <br />
                    Sustainable software development
                  </div>
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <h4 className="text-3xl font-semibold">Compile Oy</h4>
                    <h5 className="font-light text-xl">January 2021 - Present</h5>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Walk the talk
                    <br />
                    Sustainable software development
                    </p>
                    {/* Competences here */}
                    
                    <div className="mt-5">
                      <button
                        className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-angular"></i>
                      </button>
                      <button
                        className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-js"></i>
                      </button>
                      <button
                        className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-java"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-10 items-center flex flex-wrap">
                <div className="w-full md:w-3/12 ml-auto mr-auto px-4">
                  <img
                    alt="Visma Consulting"
                    className="max-w-210-px lg:max-w-full"
                    src={visma}
                  />
                  <div className="mt-4 leading-relaxed text-gray-500">
                    Visma provides value-adding software solutions to the public sector, life and pension companies, as well as chosen businesses in the private sector in the Nordic region.
                  </div>
                </div>
                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <h4 className="text-3xl font-semibold">Visma Consulting Oy</h4>
                    <h5 className="font-light text-xl">January 2019 - January 2021</h5>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    Visma Consulting, Product Creation Services unit
                    <br />
                    Visma bought Octo3 in 2017 and fully merged Octo3 into Visma from the beginning of 2019.
                    <br />
                    Fullstack development of digital services for big clients with main focus on the front end. Technologies used: Angular 4+, HTML, SCSS, Liferay, Maven, SVN, Java.
                    </p>
                    {/* Competences here */}
                    
                    <div className="mt-5">
                      <button
                        className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-angular"></i>
                      </button>
                      <button
                        className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-js"></i>
                      </button>
                      <button
                        className="bg-white text-gray-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                      >
                        <i className="fab fa-java"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
}

export default WorkExperience