import React from "react";
import moment, { Moment } from "moment";

import Navbar from "./Navbar";

import scrollIntoView from 'scroll-into-view-if-needed';
import Footer from "./Footer";

// images
import keyboard from 'assets/img/keyboard.jpg'
import Riku from 'assets/img/Riku.jpg'

interface Experience<TValue> {
  [id: string]: TValue
}

type ExperienceStats = {
  start: Moment,
  end: Moment,
}
const experience: Experience<ExperienceStats> = {
  android: { start: moment("1.5.2014", "DD.MM.YYYY"), end: moment("1.3.2016", "DD.MM.YYYY") },
  angular: { start: moment("1.6.2015", "DD.MM.YYYY"), end: moment() },
  aws: { start: moment("1.11.2021", "DD.MM.YYYY"), end: moment() },
  azure: { start: moment("1.10.2018", "DD.MM.YYYY"), end: moment() },
  build: { start: moment("1.9.2014", "DD.MM.YYYY"), end: moment() },
  git: { start: moment("1.9.2012", "DD.MM.YYYY"), end: moment() },
  googlecloud: { start: moment("1.9.2015", "DD.MM.YYYY"), end: moment("1.10.2017", "DD.MM.YYYY") },
  java: { start: moment("1.5.2014", "DD.MM.YYYY"), end: moment("1.3.2016", "DD.MM.YYYY") },
  js: { start: moment("1.9.2012", "DD.MM.YYYY"), end: moment() },
  linux: { start: moment("1.9.2006", "DD.MM.YYYY"), end: moment() },
  mac: { start: moment("1.9.2014", "DD.MM.YYYY"), end: moment() },
  node: { start: moment("1.9.2014", "DD.MM.YYYY"), end: moment() },
  programming: { start: moment("1.9.2006", "DD.MM.YYYY"), end: moment() },
  react: { start: moment("1.9.2017", "DD.MM.YYYY"), end: moment() },
  scrum: { start: moment("1.9.2014", "DD.MM.YYYY"), end: moment() },
  windows: { start: moment("1.9.2006", "DD.MM.YYYY"), end: moment() }
};

var experienceYears: Experience<number> = {};

for (let key in experience) {
  experienceYears[key] = Math.round(moment.duration(experience[key].end.diff(experience[key].start)).asYears());
}

console.log(experienceYears)

const RikuKallio = () => {

  const getYears = (years: number, getString?: boolean) => {
    if (years === 1) {
      return getString ? "1 year" : 1;
    } else if (years > 20) {
      return getString ? "20+ years" : 20;
    } else if (years > 15) {
      return getString ? "15+ years" : 15;
    } else if (years > 10) {
      return getString ? "10+ years" : 10;
    } else {
      return getString ? years + " years" : years;
    }
  }

  const scrollTo = (elementId: string) => {
      const element = document.querySelector('#' + elementId);
      if (element) {
          scrollIntoView(element, { behavior: 'smooth', scrollMode: 'if-needed' })
          /*if (this.sidebarVisible) {
              this.sidebarClose();
          }*/
      }
  }

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage:`url(${keyboard})` }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={Riku}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => scrollTo('footer')}
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {getYears(experienceYears.programming)}
                        </span>
                        <span className="text-sm text-gray-500">Years of Programming experience</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {getYears(experienceYears.angular)}
                        </span>
                        <span className="text-sm text-gray-500">Years of Angular experience</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                          {getYears(experienceYears.react)}
                        </span>
                        <span className="text-sm text-gray-500">Years of React experience</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    Riku Kallio
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Lappeenranta, Finland
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    Software Specialist
                  </div>
                  <div className="mb-2 text-gray-700">
                    <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                    Compile Oy
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      An ambitious and curious Fullstack developer with experience in modern Frontend technologies 
                      and a Masters' degree in Computer Science and Engineering. 
                      Strong experience in Java, Javascript and Typescript languages. 
                      Always looking for improvement in tech skills and new ways to develop software.
                      As developers need to adopt to new environments, frameworks and even languages throughout the career, my ability to learning new skills fast is crucial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tech" className="pb-20 relative block bg-gray-900">
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
                  As a fullstack developer with focus on the frontend, my main expertise lies in frontend frameworks
                  but I'm also very fluent with Java, node.js and typescript on the backend
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
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Angular
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  {getYears(experienceYears.angular, true)}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
                  <i className="fab fa-react text-5xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  React
                </h6>
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
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Java
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  {getYears(experienceYears.java, true)}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
                  <i className="fab fa-node text-5xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Node.js
                </h6>
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
                  {Math.max(getYears(experienceYears.azure), getYears(experienceYears.aws), getYears(experienceYears.googlecloud))}{" "}
                  years
                </p>
              </div>
            </div>
            <div className="flex flex-wrap text-center justify-center mt-10">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Other
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
                  <i className="fab fa-git text-5xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Git
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  {getYears(experienceYears.git, true)}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
                  <i className="fas fa-circle-notch text-5xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Scrum
                </h6>
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
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Windows
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  {getYears(experienceYears.windows, true)}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
                  <i className="fab fa-linux text-5xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Linux
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  {getYears(experienceYears.linux, true)}
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="p-3 w-12 h-12 inline-flex items-center justify-center text-white">
                  <i className="fab fa-apple text-5xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  MacOs
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  {getYears(experienceYears.mac, true)}
                </p>
              </div>
            </div>
          </div>
        </section>
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

          {/* <!-- TODO --> */}
          <div className="container mx-auto px-4">
            <div className="lg:divide-x divide-gray-200 divide-solid flex">
              <div className="flex-initial p-6">Left side</div>
              <div className="flex-initial p-6">Right side</div>
            </div>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Dynamic components</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default RikuKallio