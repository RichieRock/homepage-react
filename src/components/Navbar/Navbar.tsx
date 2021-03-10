/*eslint-disable*/
import Links from "data/Links";
import React, { useState } from "react";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className={
                "text-white " + 
                (navbarOpen ? "fas fa-times" : "fas fa-bars")
              } />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-600 uppercase px-3 py-4 lg:py-2 font-bold lg:font-light"
                  href="."
                >
                  Riku Kallio portfolio
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink clickCallback={() => setNavbarOpen(false)} text="Github" iconClass="fab fa-github" link={Links.github} />
              <NavLink clickCallback={() => setNavbarOpen(false)} text="Linkedin" iconClass="fab fa-linkedin" link={Links.linkedIn} />
              <NavItem clickCallback={() => setNavbarOpen(false)} iconClass="fas fa-code mr-2" scrollId="tech" text="Tech"/>
              <NavItem clickCallback={() => setNavbarOpen(false)} iconClass="far fa-building mr-2" scrollId="work" text="Work"/>
              <NavItem clickCallback={() => setNavbarOpen(false)} iconClass="fas fa-university mr-2" scrollId="education" text="Education"/>
              <NavItem clickCallback={() => setNavbarOpen(false)} iconClass="far fa-id-card mr-2" scrollId="footer" text="Contact"/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar