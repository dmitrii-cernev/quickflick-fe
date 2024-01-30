import * as PropTypes from "prop-types";

export default function InputForm(props) {

    return <form className={"animate-fade-up animate-duration-700 flex mt-4 w-full max-w-4xl"}>
        <input
            className={"flex-1 py-4 sm:px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 "}
            type={"text"}
            placeholder={"Paste your TikTok/Reels/Shorts video link here!"}
            name={"link"}
            value={props.value}
            onChange={props.onChange}
        />
        <button
            className={"flex-initial w-32 bg-gradient-to-r from-blue-300 to-pink-400 text-xl text-white py-4 px-4 sm:px-8 rounded-r-full " +
                "hover:from-blue-300 hover:to-pink-600 focus:outline-none " +
                `${props.disabled ? "active:scale-[.96] " : ""}` +
                "transition-transform duration-100 ease-in-out focus:ring-2 focus:ring-violet-400 " +
                "text-lg font-semibold disabled:bg-gray-300 " +
                "disabled:text-gray-500 disabled:cursor-not-allowed"
            }
            type={"button"}
            disabled={!props.disabled}
            onClick={props.onClick}
        >Go!
        </button>
    </form>;
}

InputForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};