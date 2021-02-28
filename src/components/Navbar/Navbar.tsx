/*eslint-disable*/
import React, { useState } from "react";
import { scrollTo } from "../../util";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >
              Notus React
            </Link> */}
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-600 uppercase px-3 py-4 lg:py-2 font-bold lg:font-light"
                  href="https://rikukallio.fi"
                >
                  Riku Kallio portfolio
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <NavLink text="Github" iconClass="fab fa-github" link="https://www.github.com/richierock" />
              <NavLink text="Linkedin" iconClass="fab fa-linkedin" link="https://linkedin.com/in/riku-kallio-250794694" />
              <NavItem iconClass="fas fa-code mr-2" scrollId="tech" text="Tech"/>
              <NavItem iconClass="far fa-building mr-2" scrollId="work" text="Work"/>
              <NavItem iconClass="fas fa-university mr-2" scrollId="education" text="Education"/>
              <NavItem iconClass="far fa-id-card mr-2" scrollId="footer" text="Contact"/>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}


export default Navbar