import * as PropTypes from "prop-types";

export default function InputForm(props) {

    return <form className={"animate-fade-up animate-duration-700 flex mt-4 w-full md:w-90"}>
        <input
            className={"flex-1 py-4 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 "}
            type={"text"}
            placeholder={"https://www.tiktok.com/@weevelanguages/video/7296481599242243361?_t=8h7MLbMVA7Z&_r=1"}
            name={"link"}
            value={props.value}
            onChange={props.onChange}
        />
        <button
            className={"bg-gradient-to-r from-blue-300 to-pink-400 text-white py-4 px-8 rounded-r-full " +
                "hover:from-blue-300 hover:to-pink-600 focus:outline-none " +
                `${props.disabled ? "active:scale-[.96] " : ""}` +
                "transition-transform duration-100 ease-in-out focus:ring-2 focus:ring-violet-400 " +
                "text-lg font-semibold disabled:bg-gray-300 " +
                "disabled:text-gray-500 disabled:cursor-not-allowed"
            }
            type={"button"}
            disabled={!props.disabled}
            onClick={props.onClick}
        >Send!
        </button>
    </form>;
}

InputForm.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};