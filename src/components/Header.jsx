import logo from "../media/logo.svg"
import {Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from "flowbite-react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <Navbar fluid
                className={"top-0 fixed w-full shadow-lg p-2 sm:p-3.5 md:px-12 xl:px-24 3xl:px-44 z-20 bg-opacity-95 backdrop-blur-[2px] transition-all"}>
            <NavbarBrand href={"/"}>
                <img src={logo} alt="MiniMemo" className="h-7 sm:h-10 mr-1 sm:mr-3"/>
                <h1 className="text-[1.35rem] sm:text-[1.7rem] font-semibold text-gray-800">MiniMemo</h1>
            </NavbarBrand>
            <div className={"flex items-center md:order-2"}>
                <button
                    className="transition-all bg-gradient-to-r from-blue-300 to-pink-400 text-white text-base md:text-xl font-semibold py-1 md:py-2 px-5 mr-4 md:mr-1 rounded-full items-center hover:from-blue-300 hover:to-pink-600 focus:outline-none ">
                    <Link to={"/login"}>Sign In</Link>
                </button>
                <NavbarToggle/>
            </div>
            <NavbarCollapse className={"transition-all"}>
                <NavbarLink href={"/"}
                            className={"mx-2 lg:mx-6  text-xl font-normal text-gray-500 transition-all duration-75 hover:!text-gray-800 hover:shadow-[0_3px_2px_-2px_lightgray]"}>
                    Home
                </NavbarLink>
                <NavbarLink href={"/about"}
                            className={"mx-2 lg:mx-6  text-xl font-normal text-gray-500 transition-all duration-75 hover:!text-gray-800 hover:shadow-[0_3px_2px_-2px_lightgray]"}>
                    About
                </NavbarLink>
                <NavbarLink href={"/api"}
                            className={"mx-2 lg:mx-6  text-xl font-normal text-gray-500 transition-all duration-75 hover:!text-gray-800 hover:shadow-[0_3px_2px_-2px_lightgray]"}>
                    API
                </NavbarLink>
                <NavbarLink href={"pricing"}
                            className={"mx-2 lg:mx-6  text-xl font-normal text-gray-500 transition-all duration-75 hover:!text-gray-800 hover:shadow-[0_3px_2px_-2px_lightgray]"}>
                    Pricing
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>)
}