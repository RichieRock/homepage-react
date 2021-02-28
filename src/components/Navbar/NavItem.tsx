import React from 'react'
import { scrollTo } from "../../util";

interface NavItemProps {
    iconClass?: string
    scrollId?: string
    text?: string
}

const NavItem = ({iconClass, scrollId, text}: NavItemProps) => {
    return (
        <li className="flex items-center">
            <button
                className="text-gray-800 lg:text-gray-300 lg:hover:text-white px-3 py-4 lg:py-2 text-xs font-bold uppercase rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ease-linear transition-all duration-150"
                type="button"
                onClick={() => scrollId ? scrollTo(scrollId) : null}
            >
                {iconClass ?
                    <span className="lg:hidden inline-block w-6">
                        <i className={iconClass}></i>
                    </span>
                : <></>
                }
                <span className="inline-block">{text}</span>
            </button>
        </li>
    )
}

export default NavItem