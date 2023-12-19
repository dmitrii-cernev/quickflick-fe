import {Component} from "react";
import TranscriptionsList from "./TranscriptionsList.jsx";
import TranscriptionsTable from "./TranscriptionsTable.jsx";
import * as PropTypes from "prop-types";

export class TranscriptionsShow extends Component {
    render() {
        return <div>
            {this.props.transcriptionsRetrieved && this.props.transcriptions.length > 0 && (
                <div>
                    {/* Render TranscriptionsList on small screens */}
                    <div className="md:hidden">
                        <TranscriptionsList transcriptions={this.props.transcriptions}/>
                    </div>

                    {/* Render TranscriptionsTable on medium and larger screens */}
                    <div className="hidden sm:block">
                        <TranscriptionsTable transcriptions={this.props.transcriptions}/>
                    </div>
                </div>
            )}
        </div>;
    }
}

TranscriptionsShow.propTypes = {
    transcriptionsRetrieved: PropTypes.bool,
    transcriptions: PropTypes.arrayOf(PropTypes.any)
};