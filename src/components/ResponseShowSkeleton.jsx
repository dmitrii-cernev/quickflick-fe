import * as PropTypes from "prop-types";

export default function ResponseShowSkeleton() {
    return <div className="animate-fade animate-duration-500 bg-white mt-4 p-4 rounded-xl shadow-md w-9/12">
        <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
                <div className="h-3 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-200 rounded"></div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded"></div>
                </div>
            </div>
        </div>
    </div>;
}

ResponseShowSkeleton.propTypes = {
    apiResponse: PropTypes.shape({summary: PropTypes.string, transcription: PropTypes.string, title: PropTypes.string}),
    onClick: PropTypes.func,
    showTranscription: PropTypes.bool
};