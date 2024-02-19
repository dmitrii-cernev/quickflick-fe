import {Tooltip} from "flowbite-react";

function toMinutes(duration) {
    return Math.floor(duration / 60);
}

export default function DurationShow(props) {
    const duration = toMinutes(props.duration.duration);
    const totalDuration = toMinutes(props.duration.totalDuration);
    return (
        <Tooltip content={"Available minutes"} style={"light"} placement={"bottom"}>
            <span
                className={"animate-fade items-start " + (duration === 0 ? " text-red-500 font-semibold" : " text-gray-50")}
            >
        {duration}m / {totalDuration}m
    </span>
        </Tooltip>
    )
}