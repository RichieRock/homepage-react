
import { TechIcon, WorkExperience, WorkInfo } from '../../data/workExperiences'
import { scrollTo } from '../../util'

interface ExperienceProps {
  workExperience: WorkExperience
}

const ExperienceComponent = ({ workExperience }: ExperienceProps) => {
  return (
    <div className="pt-10 items-center flex flex-wrap">
      <div className="w-full lg:w-3/12 ml-auto mr-auto px-4">
        <img
          alt={workExperience.company.name}
          className="lg:max-w-full h-auto max-h-44"
          style={{maxWidth: '210px'}}
          src={workExperience.company.logo}
        />
        <h4 className="text-xl font-normal mt-4 dark:text-white">
          {workExperience.company.name}
        </h4>
        <div className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
          {workExperience.company.text}
        </div>
      </div>
      <div className="w-full lg:w-5/12 ml-auto mr-auto px-4 pt-4">
        {workExperience.workInfo.map((work: WorkInfo, index: number, arr) => (
          <div
            key={work.title + '.' + index}
            className={'md:pr-12 ' + (index !== arr.length - 1 ? 'mb-8' : '')}
          >
            <h4 className="text-2xl font-semibold dark:text-white">{work.title}</h4>
            <h5 className="text-xl font-light dark:text-gray-300">{work.duration}</h5>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              {work.text}
            </p>
            <div className="mt-5">
              {work.techIconArray.map((tech: TechIcon, index2: number) => (
                <button
                  key={tech + '.' + index2}
                  className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-hidden focus:outline-hidden mr-2 mb-2"
                  type="button"
                  onClick={() => scrollTo('tech')}
                >
                  <i className={tech} />
                </button>
              ))}
              {work.extraIcons ? (
                work.extraIcons.map((tech: string, index3: number) => (
                  <button
                    key={'extratech' + '.' + index3}
                    className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-hidden focus:outline-hidden mr-2 mb-2"
                    type="button"
                    onClick={() => scrollTo('tech')}
                  >
                    <img alt="" className="w-4 h-auto inline-flex" src={tech} />
                  </button>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceComponent
