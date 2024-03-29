import * as PropTypes from "prop-types";

export default function InputForm(props) {

    return <form
        className={"animate-fade-up animate-duration-700 flex mt-4 max-w-4xl drop-shadow-md w-full"}>
        <input
            className={"text-lg grow-[4] sm:grow-[3] min-w-0 basis-0 py-4 sm:px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 "}
            type={"text"}
            placeholder={(props.isLogged ? "" : "Try me! ") + "Paste your TikTok/Reels/Shorts video link here!"}
            name={"link"}
            value={props.value}
            onChange={props.onChange}
        />
        <button
            className={"grow-[1] basis-1/5 sm:basis-0 sm:w-auto bg-gradient-to-r from-blue-300 to-pink-400 text-white py-4 px-4 sm:px-6 rounded-r-full " +
                "hover:from-blue-300 hover:to-pink-600 focus:outline-none " +
                `${props.disabled ? "active:scale-[.96] " : ""}` +
                "transition-transform duration-100 ease-in-out focus:ring-2 focus:ring-violet-400 " +
                "text-lg font-semibold disabled:bg-gray-300 " +
                "disabled:text-gray-500 disabled:cursor-not-allowed"
            }
            type={"button"}
            disabled={!props.disabled}
            onClick={props.onClick}
        >
            <span className={"text-2xl"}>Go!</span>
        </button>
    </form>;
}

InputForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    isLogged: PropTypes.bool
};