export default function ProgressBar(props) {
    return (
        <div className='relative m-4 h-3.5 w-9/12 bg-gray-200 rounded-full animate-fade'>
            <div
                style={{width: `${props.value}%`}}
                className={'h-full rounded-full bg-purple-700 animate-pulse animate-duration-[2000ms]'}>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm">
                {props.value}%
            </div>
        </div>
    );
}