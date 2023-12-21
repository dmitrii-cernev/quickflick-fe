export default function ProgressBar(props) {
    return (
        <div className='relative m-4 h-4 w-9/12 bg-gray-100 shadow-md rounded-full animate-fade'>
            <div
                style={{width: `${props.value}%`}}
                className={'h-full rounded-full bg-purple-500 animate-pulse animate-duration-[2500ms]'}>
            </div>
            <div
                className="absolute inset-0 flex items-center justify-center">
                <span className={"mix-blend-difference text-neutral-400 font-light"}>{props.value}%</span>
            </div>
        </div>);
}