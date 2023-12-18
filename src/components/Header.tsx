
'use client';
import Image from 'next/image';
import { useState } from "react";

export default function Header(props: any) {

    const [navBarOpen, setNavBarOpen] = useState(false);
    return (
        <>
            <nav className="">
                <div className="max-w-7xl flex mx-auto  flex-wrap items-center justify-between mx-auto px-2 py-4">
                    <a href="/" className="flex custom-underline-animation items-center space-x-3 rtl:space-x-reverse">
                        <p className="font-mono text-[1.4rem] font-semibold text-black">Shanmukha Yenneti</p>
                    </a>
                    <button onClick={() => setNavBarOpen(!navBarOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden bg-white-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-black" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full ml-[20rem] md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li className="">
                                <a href="/About" className={props?.current == 'about' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} aria-current="page">About</a>
                                <span className="block max-w-0 group-hover:max-w-full  transition-all duration-500 h-0.5 bg-sky-600"></span>
                            </li>
                            <li>
                                <a href="/Contact" className={props?.current == 'Contact' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} >Contact</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                            </li>
                            <li>
                                <a href="/syenneti_Resume.pdf" target="_blank" className={props?.current == 'CV' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} >CV</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                            </li>
                            <li>
                                <a href="/Publications" className={props?.current == 'Publications' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "}>Publications</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                            </li>
                            <li>
                                <a href="/Resources" className={props?.current == 'Resources' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} >Resources</a>
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div>
                <div className="absolute w-full z-100 bg-white">
                    {navBarOpen &&
                        <div className="flex w-full md:hidden bg-white" id="navbar-default">
                            <ul className="font-medium flex bg-white flex-col space-y-2 p-4 justify-center w-full md:p-0 mt-0 border border-gray-200 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                                <li className="text-center bg-white">
                                    <a href="/About" className={props?.current == 'about' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono  rounded md:bg-transparent text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} aria-current="page">About</a>
                                    <span className="block max-w-0 group-hover:max-w-full  transition-all duration-500 h-0.5 bg-sky-600"></span>
                                </li>
                                <li className="text-center bg-white">
                                    <a href="/Contact" className={props?.current == 'Contact' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono  rounded md:bg-transparent text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono  rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} >Contact</a>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                                </li>
                                <li className="text-center bg-white">
                                    <a href="/CV" className={props?.current == 'CV' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono rounded md:bg-transparent md:text-blue-700 md:p-0  dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono  rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} >CV</a>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                                </li>
                                <li className="text-center bg-white">
                                    <a href="/Publications" className={props?.current == 'Publications' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono rounded md:bg-transparent text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono  rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "}>Publications</a>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                                </li>
                                <li className="text-center bg-white">
                                    <a href="/Resources" className={props?.current == 'Resources' ? " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono rounded md:bg-transparent text-blue-700 md:p-0  md:dark:text-blue-500 " : " block group custom-underline-animation text-black text-[1.2rem] font-semibold font-mono rounded md:bg-transparent md:text-blue-700 md:p-0  md:dark:text-black "} >Resources</a>
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

