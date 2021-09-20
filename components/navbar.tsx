import logo from '../public/icons/Icon-48.png';
import Image from 'next/image';
import { useState } from 'react';

function Navbar() {
    const [clicked, setClicked] = useState(false);

    return (
        // <!-- Navbar goes here -->
        <nav className="bg-white shadow-lg w-screen fixed ">
            <div className=" mx-auto px-4">
                <div className="flex justify-between">
                    <div>
                        {/* <!-- Website Logo --{'>'} */}
                        <a href="#" className="flex items-center py-4 px-2">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="h-8 w-8 mr-2"
                            />
                            <span className="font-semibold text-logoColor text-lg">
                                GoodWill
                                <p className="text-xs">
                                    Associates &#38; Construction
                                </p>
                            </span>
                        </a>
                    </div>
                    {/* <!-- Primary Navbar items --{'>'} */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a
                            href=""
                            className="py-4 px-4 text-gray-500 border-b-4 border-green-500 font-semibold "
                        >
                            Home
                        </a>
                        <a
                            href=""
                            className="py-4 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                        >
                            About Us
                        </a>
                        <a
                            href=""
                            className="py-4 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href=""
                            className="py-4 px-4 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* <!-- Secondary Navbar items --{'>'} */}
                    {/* <div className="hidden md:flex items-center space-x-3 ">
                        <a
                            href=""
                            className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
                        >
                            Log In
                        </a>
                        <a
                            href=""
                            className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300"
                        >
                            Sign Up
                        </a>
                    </div> */}
                    {/* <!-- Mobile menu button --{'>'} */}
                    <div
                        className="md:hidden flex items-center "
                        onClick={() => setClicked(!clicked)}
                    >
                        <button className="outline-none mobile-menu-button">
                            <svg
                                className=" w-6 h-6 text-logoColor hover:text-red-500 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- mobile menu --{'>'} */}
            {clicked == true && (
                <div className="md:hidden mobile-menu transition duration-900 ease-in-out">
                    <ul className="">
                        <li className="">
                            <a
                                href="index.html"
                                className="block text-sm px-2 py-4 text-white bg-logoColor font-semibold"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
export default Navbar;
