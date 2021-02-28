//import oulu_university from 'assets/img/oulu_university.svg'
import oulu_university from 'assets/img/university_of_oulu.svg'
import React, { ReactNode } from 'react'

export interface Education {
  logo: string
  name: string
  subtitle: string
  eduDescription: ReactNode
  degree: ReactNode
  duration: string
  description: string
}

export const educations: Education[] = [
  {
    logo: oulu_university,
    name: 'University of Oulu',
    subtitle:
      'Faculty of Information Technology and Electrical Engineering ITEE',
    eduDescription: (
      <>
        The mission of the ITEE faculty is: to advance internationally top-level
        research on information technology and education based on it; to
        generate new knowledge of information technology and apply it to the
        needs of the society, people and industries; and to educate information
        technology experts
      </>
    ),
    degree: (
      <>
        Master’s degree, Computer Science and Engineering <br />
        (Tietotekniikan Diplomi-insinööri)
      </>
    ),
    duration: '2010 - 2015',
    description: (
      <>
        Thesis{' '}
        <i>
          Development process and evaluation of a customer service chat
          application
        </i>{' '}
        was made for Zef Oy during 2015. The work consisted of developing an
        Android application using Android sdk, Java and XML, testing and
        evaluation of the application.
      </>
    ),
  },
]
