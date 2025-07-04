import React from 'react'
import {Link , NavLink} from 'react-router-dom'
// Link is better than <a> tag as using a tag causes a full reload and loses app state
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-orange-100 border-gray-700 px-4 lg:px-6 py-2.5 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://imgs.search.brave.com/ke70qyqi836JMCrVEMiTU9xWGT3ts0_EOQn-yBYU6Gs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81OC83NC9s/ZXR0ZXItaGItaGV4/YWdvbmFsLWxvZ28t/dmVjdG9yLTM2Mjg1/ODc0LmpwZw"
                            className="mr-3 h-23"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        //isActive checks if the current link matches to the "to" link of NavLink, it is a prop/parameter passed to className function
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                        //isActive checks if the current link matches to the "to" link of NavLink, it is a prop/parameter passed to className function
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            
                                <li>
                                    <NavLink
                                        to="contact"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            //isActive checks if the current link matches to the "to" link of NavLink, it is a prop/parameter passed to className function
                                        }
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="user/:userid"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            //isActive checks if the current link matches to the "to" link of NavLink, it is a prop/parameter passed to className function
                                        }
                                    >
                                        Guest User
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="github"
                                        className={({isActive}) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${isActive? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            //isActive checks if the current link matches to the "to" link of NavLink, it is a prop/parameter passed to className function
                                        }
                                    >
                                        GitHub
                                    </NavLink>
                                </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}