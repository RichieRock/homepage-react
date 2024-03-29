import Links from '../data/Links'
import { scrollTo } from '../util'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-20 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Contact me</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:rikukalliofi@gmail.com"
                >
                  rikukalliofi (at) gmail.com
                </a>
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={Links.linkedIn}
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={Links.github}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </button>
                <button
                  className="bg-white text-red-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:rikukalliofi@gmail.com"
                  >
                    <i className="far fa-paper-plane"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 ml-auto lg:text-right">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Social
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={Links.github}
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href={Links.linkedIn}
                      >
                        Linkedin
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="mailto:rikukalliofi@gmail.com"
                      >
                        Mail to me
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-col flex-wrap items-center md:justify-between justify-center">
            <button
              className="bg-white text-indigo-600 hover:text-white hover:bg-black shadow-lg hover:shadow-inner font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mb-2"
              type="button"
              onClick={() => scrollTo('top')}
            >
              <i className="fas fa-chevron-up"></i>
            </button>
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Built with react / typescript / tailwindcss ©{' '}
                {new Date().getFullYear()} by{' '}
                <a href="." className="text-gray-600 hover:text-gray-900">
                  Riku Kallio
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
