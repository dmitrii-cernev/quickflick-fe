import {useLinkClickHandler} from "react-router-dom";
import {NavbarLink} from "flowbite-react";

export default function AppNavLink(props) {
    const clickHandler = useLinkClickHandler(props.to);

    return <span onClick={clickHandler}>
        <NavbarLink href={props.to} className={props.className}>
            {props.text}
        </NavbarLink>
    </span>;
}