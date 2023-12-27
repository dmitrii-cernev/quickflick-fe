import {useLinkClickHandler} from "react-router-dom";
import {NavbarLink} from "flowbite-react";
import {useNavbarContext} from "flowbite-react/lib/esm/components/Navbar/NavbarContext.js";

export default function AppNavLink(props) {
    const {isOpen, setIsOpen} = useNavbarContext();
    const toggleNavbar = () => setIsOpen(!isOpen);
    const clickHandler = useLinkClickHandler(props.to);

    function togg(event) {
        toggleNavbar();
        clickHandler(event);
    }

    return <span onClick={togg}>
        <NavbarLink href={props.to} className={props.className}>
            {props.text}
        </NavbarLink>
    </span>;
}