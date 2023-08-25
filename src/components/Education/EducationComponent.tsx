import { Education } from '../../data/educations'

interface EducationProps {
  education: Education
}

const EducationComponent = ({ education }: EducationProps) => {
  return (
    <div className="pt-10 items-center flex flex-wrap">
      <div className="w-full lg:w-3/12 ml-auto mr-auto px-4">
        <img
          alt={education.name}
          className="max-w-210-px lg:max-w-full h-auto max-h-44"
          src={education.logo}
        />
        <h4 className="text-xl font-normal mt-4">{education.name}</h4>
        <div className="mt-4 leading-relaxed text-gray-300">
          {education.eduDescription}
        </div>
      </div>
      <div className="w-full lg:w-5/12 ml-auto mr-auto px-4 pt-4">
        <div className="md:pr-12">
          <h4 className="text-2xl font-semibold">{education.degree}</h4>
          <h5 className="text-xl font-light">{education.duration}</h5>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            {education.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EducationComponent
