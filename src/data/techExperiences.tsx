import moment, { Moment } from 'moment'

/* Tech experiences */
export interface ExperienceWithDuration<TValue> {
  [id: string]: TValue
}

type ExperienceStats = {
  start: Moment
  end: Moment
}
const experience: ExperienceWithDuration<ExperienceStats> = {
  android: {
    start: moment('1.5.2014', 'DD.MM.YYYY'),
    end: moment('1.3.2016', 'DD.MM.YYYY'),
  },
  angular: { start: moment('1.6.2015', 'DD.MM.YYYY'), end: moment('1.1.2021', 'DD.MM.YYYY') },
  aws: { start: moment('1.11.2021', 'DD.MM.YYYY'), end: moment() },
  azure: { start: moment('1.10.2018', 'DD.MM.YYYY'), end: moment() },
  build: { start: moment('1.9.2014', 'DD.MM.YYYY'), end: moment() },
  git: { start: moment('1.9.2012', 'DD.MM.YYYY'), end: moment() },
  googlecloud: {
    start: moment('1.9.2015', 'DD.MM.YYYY'),
    end: moment('1.10.2017', 'DD.MM.YYYY'),
  },
  java: {
    start: moment('1.5.2014', 'DD.MM.YYYY'),
    end: moment('1.3.2016', 'DD.MM.YYYY'),
  },
  js: { start: moment('1.9.2012', 'DD.MM.YYYY'), end: moment() },
  ts: { start: moment('1.1.2020', 'DD.MM.YYYY'), end: moment() },
  linux: { start: moment('1.9.2006', 'DD.MM.YYYY'), end: moment() },
  mac: { start: moment('1.9.2014', 'DD.MM.YYYY'), end: moment() },
  node: { start: moment('1.9.2014', 'DD.MM.YYYY'), end: moment() },
  programming: { start: moment('1.9.2006', 'DD.MM.YYYY'), end: moment() },
  react: { start: moment('1.9.2017', 'DD.MM.YYYY'), end: moment() },
  scrum: { start: moment('1.9.2014', 'DD.MM.YYYY'), end: moment() },
  windows: { start: moment('1.9.2006', 'DD.MM.YYYY'), end: moment() },
}

export const experienceYears: ExperienceWithDuration<number> = {}

const initExperienceYears = () => {
  for (const key in experience) {
    experienceYears[key] = Math.round(
      moment.duration(experience[key].end.diff(experience[key].start)).asYears()
    )
  }
}

initExperienceYears()
