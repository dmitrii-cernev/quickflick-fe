export function SearchVideo(props) {
    return (
        <div className="w-full sm:w-2/3 flex justify-center items-center">
            <input
                type="text"
                placeholder="Search video"
                className="transition-all ease-in-out duration-200 rounded-full my-2 sm:my-4 px-4 h-10 w-1/2 shadow-sm focus:w-3/4"
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}
