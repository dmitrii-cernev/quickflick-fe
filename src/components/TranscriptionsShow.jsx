import {Component} from "react";
import TranscriptionsList from "./TranscriptionsList.jsx";
import TranscriptionsTable from "./TranscriptionsTable.jsx";
import * as PropTypes from "prop-types";

export class TranscriptionsShow extends Component {
    render() {
        return <div className={"w-full"}>
            {this.props.transcriptionsRetrieved && this.props.transcriptions.length > 0 && (
                <div>
                    {/* Render TranscriptionsList on small screens */}
                    <div className="md:hidden">
                        <TranscriptionsList
                            transcriptions={handleTranscription(this.props.transcriptions)}/>
                    </div>

                    {/* Render TranscriptionsTable on medium and larger screens */}
                    <div className="hidden md:block">
                        <TranscriptionsTable
                            transcriptions={handleTranscription(this.props.transcriptions)}/>
                    </div>
                </div>
            )}
        </div>;
    }
}

const handleTranscription = (transcriptions) => {
    const sortedTranscriptions = transcriptions.sort((a, b) => {
        return b.createdAt - a.createdAt;
    });
    return sortedTranscriptions.map((transcription) => {
        const {status} = transcription;

        if (status === 'ERROR') {
            return {
                ...transcription,
                title: 'Error',
                summary: 'Transcription error. Please try again later.',
            };
        } else if (status === 'PROCESSING' || status === 'TOO_LONG') {
            return {
                ...transcription,
                title: 'Processing...',
                summary: 'This video is still in process...',
            };
        }

        return transcription;
    });
};

TranscriptionsShow.propTypes = {
    transcriptionsRetrieved: PropTypes.bool,
    transcriptions: PropTypes.arrayOf(PropTypes.any)
};