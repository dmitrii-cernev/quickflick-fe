import logo from "../media/logo.svg"
import {Button, Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";

export function Header() {
    return (
        <header
            className="bg-white shadow-lg p-2 pl-4 sm:p-3.5 sm:pl-8 top-0 fixed w-full z-20 bg-opacity-[0.94] backdrop-blur-[2px]">
            <div className={"max-w-screen-xl flex items-center justify-between mx-auto px-3 sm:px-1"}>
                <div className="container flex items-center w-auto">
                    <img src={logo} alt="MiniMemo" className="h-7 sm:h-10 mr-1 sm:mr-3"/>
                    <h1 className="text-[1.35rem] sm:text-[1.7rem] font-semibold text-gray-800">MiniMemo</h1>
                </div>
                <div className="w-auto text-lg mr-24 hidden md:flex ">
                    <ul className={"flex items-center space-x-10"}>
                        <li className={"inline-block mr-2 sm:mr-4"}>
                            <a href="#"
                               className=" text-gray-500 transition-all duration-75 hover:text-gray-800 hover:border-b-2">Home</a>
                        </li>
                        <li className={"inline-block mr-2 sm:mr-4"}>
                            <a href="#"
                               className="text-gray-500 transition-all duration-75 hover:text-gray-800 hover:border-b-2">About</a>
                        </li>
                        <li className={"inline-block mr-2 sm:mr-4"}>
                            <a href="#"
                               className="text-gray-500 transition-all duration-75 hover:text-gray-800 hover:border-b-2">API</a>
                        </li>
                        <li className={"inline-block mr-2 sm:mr-4"}>
                            <a href="#"
                               className="text-gray-500 transition-all duration-75 hover:text-gray-800 hover:border-b-2">Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className={""}>
                    <button
                        className="hidden md:flex bg-gradient-to-r from-blue-300 to-pink-400 text-white text-base sm:text-lg font-semibold py-1 md:py-2 px-5 rounded-full items-center hover:from-blue-300 hover:to-pink-600 focus:outline-none ">
                        <span>Sign In</span>
                    </button>
                </div>
                <div className={"md:hidden"}>
                    <Menu>
                        <MenuHandler>
                            <Button className="p-1 shadow-sm bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" data-slot="icon"
                                     className="w-6 h-6 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </Button>
                        </MenuHandler>
                        <MenuList className={"w-full p-2 rounded-b-2xl space-y-3 text-lg md:hidden"}>
                            <MenuItem><a href="#" className="text-gray-500">Home</a></MenuItem>
                            <MenuItem><a href="#" className="text-gray-500">About</a></MenuItem>
                            <MenuItem><a href="#" className="text-gray-500">API</a></MenuItem>
                            <MenuItem><a href="#" className="text-gray-500">Pricing</a></MenuItem>
                            <hr/>
                            <MenuItem><a href="#" className="text-gray-600 font-semibold">Sign In</a></MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>
        </header>
    );
}
