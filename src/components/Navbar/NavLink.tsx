import React from 'react'

interface NavLinkProps {
  link?: string
  text?: string
  iconClass?: string
}

const NavLink = ({ link, text, iconClass }: NavLinkProps) => {
  return (
    <li className="flex items-center">
      <a
        className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        rel="noopener noreferrer"
        href={link}
        target="_blank"
      >
        <i
          className={
            iconClass
              ? iconClass +
                ' lg:text-gray-300 lg:hover:text-white text-gray-500 text-lg leading-lg'
              : 'hidden'
          }
        />
        <span className="lg:hidden inline-block ml-2">{text}</span>
      </a>
    </li>
  )
}

export default NavLink
