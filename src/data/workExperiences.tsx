// companies
import compile from "../assets/img/compile.webp";
// icons
import graphql from "../assets/img/graphql.svg";
import octo3 from "../assets/img/octo3.webp";
import vaisala from "../assets/img/vaisala.webp";
import visma from "../assets/img/visma.webp";
import zef from "../assets/img/zef.webp";
import { ReactNode } from "react";

/* Work experiences */
export interface Company {
  name: string;
  logo: string;
  text: ReactNode;
}
export type TechIcon = string;
export interface WorkInfo {
  title: string;
  text: ReactNode;
  duration: string;
  techIconArray: TechIcon[];
  extraIcons?: string[];
}
export interface WorkExperience {
  company: Company;
  workInfo: WorkInfo[];
}
export const workExperiences: WorkExperience[] = [
  {
    company: {
      name: "Compile Oy",
      logo: compile,
      text: (
        <>
          We believe that satisfied, involved and skilled people are the base of
          a sustainable software development. Compile has the most experienced
          developers who create solutions that enable competitiveness for our
          clients, society and environment.
          <br />
          <br />
          Walk the Talk.
        </>
      ),
    },
    workInfo: [
      {
        title: "Hands-on fullstack architect",
        text: (
          <>
            Working as a hands-on fullstack architect and consultant for
            multiple clients, owning technical direction from discovery to
            production.
            <br />
            Designing scalable cloud-native architectures on Azure and AWS,
            while applying AI-driven development daily for faster research,
            prototyping, implementation, and quality improvements.
            <br />
            Building modern React + TypeScript frontends and robust Node.js
            TypeScript backends, with API design across both GraphQL and
            traditional REST.
          </>
        ),
        duration: "January 2021 - Present",
        techIconArray: [
          "fab fa-js",
          "fab fa-java",
          "fab fa-react",
          "fas fa-cloud",
          "fab fa-node",
          "fas fa-drafting-compass",
        ],
        extraIcons: [graphql],
      },
    ],
  },
  {
    company: {
      name: "Visma Consulting Oy",
      logo: visma,
      text: (
        <>
          Visma provides value-adding software solutions to the public sector,
          life and pension companies, as well as chosen businesses in the
          private sector in the Nordic region.
        </>
      ),
    },
    workInfo: [
      {
        title: "Software Designer",
        text: (
          <>
            Visma Consulting, Product Creation Services unit
            <br />
            Visma bought Octo3 in 2017 and fully merged Octo3 into Visma from
            the beginning of 2019. Later known as twoday.
            <br />
            Fullstack development of large digital services with emphasis on
            frontend architecture and maintainable implementation patterns.
            Designing and delivering production systems in Azure and on-premise
            Linux environments. Core technologies: Angular 4+, HTML, SCSS,
            Liferay, Maven, SVN, Java.
          </>
        ),
        duration: "January 2019 - January 2021",
        techIconArray: [
          "fab fa-js",
          "fab fa-java",
          "fab fa-angular",
          "fas fa-cloud",
          "fab fa-linux",
        ],
      },
    ],
  },
  {
    company: {
      name: "Octo 3 Oy",
      logo: octo3,
      text: (
        <>
          Octo3 is a concultancy company with over 70 professionals. Good user
          experience, happy customer and creativity are something the company
          values.
        </>
      ),
    },
    workInfo: [
      {
        title: "Software Designer",
        text: (
          <>
            Frontend development of a large-scale ERP application with focus on
            scalable UI architecture and long-term maintainability. The work was
            mainly with AngularJS, HTML, CSS and JavaScript.
            <br />
            Development of an application to be used by many the sales personnel
            to calculate offers for clients. Work was done with React, HTML,
            SCSS, TypeScript, including Node.js backend development and Azure
            environment configuration.
          </>
        ),
        duration: "October 2017 - December 2018",
        techIconArray: [
          "fab fa-js",
          "fab fa-angular",
          "fas fa-cloud",
          "fab fa-node",
        ],
      },
    ],
  },
  {
    company: {
      name: "Zef Oy",
      logo: zef,
      text: (
        <>
          ZEF is creating a free survey tool, taking your interactivity and data
          collection methods to the next level. With ZEF you can build
          meaningful surveys, quizzes, selectors and assessments to profile your
          audience and make better decisions.
        </>
      ),
    },
    workInfo: [
      {
        title: "Front End Engineer",
        text: (
          <>
            Web development and maintaining of a large scale survey tool
            application. The work was mainly with Angular2, TypeScript,
            JavaScript, HTML, CSS and other front end languages and tools. Work
            also included configuration, usage and knowledge of Google Cloud
            Platform with Firebase as the main database.
          </>
        ),
        duration: "January 2016 – September 2017",
        techIconArray: [
          "fab fa-js",
          "fab fa-angular",
          "fas fa-cloud",
          "fab fa-node",
        ],
      },
      {
        title: "Mobile Development Expert",
        text: (
          <>
            Mobile development (Android, Java) and Master&apos;s Thesis for my
            degree in University of Oulu on subject &quot;Development process
            and evaluation of a customer service chat application&quot;.
          </>
        ),
        duration: "September 2014 – December 2015",
        techIconArray: ["fab fa-java", "fab fa-android", "fas fa-mobile-alt"],
      },
    ],
  },
  {
    company: {
      name: "Vaisala Oyj",
      logo: vaisala,
      text: (
        <>
          The lives of millions of people all around the world are touched daily
          by the work we do and the technologies we create. Our products and
          services provide our customers with the means to influence and better
          understand their environment. Curiosity, the desire to meet challenges
          and an extraordinary ability to innovate are Vaisala&apos;s core, both
          past and present.
        </>
      ),
    },
    workInfo: [
      {
        title: "Giant Leap Intern",
        text: (
          <>
            Mobile application closely related to weather radars to be used
            largely by meteorologists. Technologies used: Android sdk, Java and
            XML
          </>
        ),
        duration: "May 2014 – August 2014",
        techIconArray: ["fab fa-java", "fab fa-android", "fas fa-mobile-alt"],
      },
    ],
  },
];
