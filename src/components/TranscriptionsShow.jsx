import {Component} from "react";
import TranscriptionsList from "./TranscriptionsList.jsx";
import TranscriptionsTable from "./TranscriptionsTable.jsx";
import * as PropTypes from "prop-types";

export class TranscriptionsShow extends Component {
    render() {
        const ListView = <div className={this.props.isLogged && "md:hidden"}>
            <TranscriptionsList
                transcriptions={handleTranscription(this.props.transcriptions)}/>
        </div>;
        const TableView = <div className="hidden md:block">
            <TranscriptionsTable
                transcriptions={handleTranscription(this.props.transcriptions)}/>
        </div>;

        return <div className={"w-full"}>
            {this.props.isLogged && this.props.isTranscriptionsRetrieved && this.props.transcriptions.length === 0 && (
                <div className={"text-center"}>
                    <h3 className={"text-xl font-semibold text-white"}>No result</h3>
                </div>)}
            {this.props.isLogged && this.props.isTranscriptionsRetrieved && this.props.transcriptions.length > 0 && (
                <div>
                    {/* Render TranscriptionsList on small screens */}
                    {ListView}
                    {/* Render TranscriptionsTable on medium and larger screens */}
                    {TableView}
                </div>)}
            {!this.props.isLogged && this.props.isTranscriptionsRetrieved && this.props.transcriptions.length > 0 && ListView}
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
    isTranscriptionsRetrieved: PropTypes.bool,
    transcriptions: PropTypes.arrayOf(PropTypes.any),
    isLogged: PropTypes.bool,
};