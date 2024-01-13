import {Tooltip} from "flowbite-react";

export default function CountShow(props) {
    return (
        <Tooltip content={"Number of available requests"} style={"light"} placement={"bottom"}>
            <span
                className={"animate-fade items-start " + (props.count.count === 0 ? " text-red-500 font-semibold" : " text-gray-50")}
            >
        {props.count.count} / {props.count.totalCount}
    </span>
        </Tooltip>
    )
}