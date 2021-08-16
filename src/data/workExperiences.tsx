// companies
import compile from 'assets/img/compile.webp'
// icons
import graphql from 'assets/img/graphql.svg'
import octo3 from 'assets/img/octo3.webp'
import vaisala from 'assets/img/vaisala.webp'
import visma from 'assets/img/visma.webp'
import zef from 'assets/img/zef.webp'
import React, { ReactNode } from 'react'

/* Work experiences */
export interface Company {
  name: string
  logo: string
  text: ReactNode
}
export interface WorkInfo {
  title: string
  text: ReactNode
  duration: string
  techIconArray: string[]
  extraIcons?: any[]
}
export interface WorkExperience {
  company: Company
  workInfo: WorkInfo[]
}
export const workExperiences: WorkExperience[] = [
  {
    company: {
      name: 'Compile Oy',
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
        title: 'Software Specialist',
        text: (
          <>
            Working as a fullstack developer consultant for different clients.
            <br />
            Configuring Azure and AWS cloud environments, mainly using React on
            the frontend and Typescript language. Experiencing GraphQL in
            additional to traditional REST APIs.
          </>
        ),
        duration: 'January 2021 - Present',
        techIconArray: [
          'fab fa-js',
          'fab fa-java',
          'fab fa-react',
          'fas fa-cloud',
          'fab fa-node',
        ],
        extraIcons: [graphql],
      },
    ],
  },
  {
    company: {
      name: 'Visma Consulting Oy',
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
        title: 'Software Designer',
        text: (
          <>
            Visma Consulting, Product Creation Services unit
            <br />
            Visma bought Octo3 in 2017 and fully merged Octo3 into Visma from
            the beginning of 2019.
            <br />
            Fullstack development of digital services for big clients with main
            focus on the front end. Using Azure on the cloud but also on-premise
            services running on Linux. Technologies used: Angular 4+, HTML,
            SCSS, Liferay, Maven, SVN, Java.
          </>
        ),
        duration: 'January 2019 - January 2021',
        techIconArray: [
          'fab fa-js',
          'fab fa-java',
          'fab fa-angular',
          'fas fa-cloud',
          'fab fa-linux',
        ],
      },
    ],
  },
  {
    company: {
      name: 'Octo 3 Oy',
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
        title: 'Software Designer',
        text: (
          <>
            Front end development of a large scale ERP application. The work was
            mainly with Angularjs, HTML, CSS and Javascript technologies.
            <br />
            Development of an application to be used by many the sales personnel
            to calculate offers to their clients. Work was done with reactjs,
            HTML, SCSS, Typescript but also including Node.js development and
            Azure environment configurations.
          </>
        ),
        duration: 'October 2017 - December 2018',
        techIconArray: [
          'fab fa-js',
          'fab fa-angular',
          'fas fa-cloud',
          'fab fa-node',
        ],
      },
    ],
  },
  {
    company: {
      name: 'Zef Oy',
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
        title: 'Front End Engineer',
        text: (
          <>
            Web development and maintaining of a large scale survey tool
            application. The work was mainly with Angular2, TypeScript,
            JavaScript, HTML, CSS and other front end languages and tools. Work
            also included configuration, usage and knowledge of Google Cloud
            Platform with Firebase as the main database.
          </>
        ),
        duration: 'January 2016 – September 2017',
        techIconArray: [
          'fab fa-js',
          'fab fa-angular',
          'fas fa-cloud',
          'fab fa-node',
        ],
      },
      {
        title: 'Mobile Development Expert',
        text: (
          <>
            Mobile development (Android, Java) and Master&apos;s Thesis for my
            degree in University of Oulu on subject &quot;Development process
            and evaluation of a customer service chat application&quot;.
          </>
        ),
        duration: 'September 2014 – December 2015',
        techIconArray: ['fab fa-java', 'fab fa-android', 'fas fa-mobile-alt'],
      },
    ],
  },
  {
    company: {
      name: 'Vaisala Oyj',
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
        title: 'Giant Leap Intern',
        text: (
          <>
            Mobile application closely related to weather radars to be used
            largely by meteorologists. Technologies used: Android sdk, Java and
            XML
          </>
        ),
        duration: 'May 2014 – August 2014',
        techIconArray: ['fab fa-java', 'fab fa-android', 'fas fa-mobile-alt'],
      },
    ],
  },
]
