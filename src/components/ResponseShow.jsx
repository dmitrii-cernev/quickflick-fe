import * as PropTypes from "prop-types";

export default function ResponseShow(props) {
    return <div className="bg-white mt-4 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">{props.apiResponse.title}</h2>
        <p className="text-gray-600">{props.apiResponse.summary}</p>
        <button
            className="text-blue-500 underline"
            onClick={props.onClick}
        >
            {props.showTranscription ? "Hide Transcription" : "Show Transcription"}
        </button>
        {props.showTranscription && props.apiResponse.transcription &&
            (<div className="mt-2">
                    <p className="text-gray-600">{props.apiResponse.transcription}</p>
                </div>
            )}
    </div>;
}

ResponseShow.propTypes = {
    apiResponse: PropTypes.shape({summary: PropTypes.string, transcription: PropTypes.string, title: PropTypes.string}),
    onClick: PropTypes.func,
    showTranscription: PropTypes.bool
};