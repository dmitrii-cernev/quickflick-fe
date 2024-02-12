// eslint-disable-next-line react/prop-types
import {useState} from "react";
import TranscriptionModal from "./TranscriptionModal.jsx";

const TranscriptionsTable = ({transcriptions}) => {
    const [transcriptionModal, setTranscriptionModal] = useState(false);
    const [currentTranscription, setCurrentTranscription] = useState({});
    const [currentTitle, setCurrentTitle] = useState("");


    function tableHeader(value) {
        return <th className="py-2 px-4 bg-gray-100 border-b">{value}</th>;
    }

    function getTd(value) {
        return <td className="py-2 px-4 border-b">{value}</td>;
    }

    function tableLink(transcription) {
        return <a
            href={transcription.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
        >
            {transcription.title}
        </a>;
    }

    function showTranscription(item) {
        return <button
            onClick={() => {
                setCurrentTranscription(item.transcription);
                setCurrentTitle(item.title);
                setTranscriptionModal(true);
            }}
            className="text-blue-500 hover:underline"
        >
            Show
        </button>;
    }

    return (
        <div
            className={"m-4 rounded-xl overflow-hidden shadow-md animate-fade-up animate-duration-700"}>
            {TranscriptionModal(transcriptionModal, setTranscriptionModal, currentTranscription, currentTitle)}
            <table
                className="transition-all ease-in-out duration-200 min-w-full max-w-md md:max-w-full border border-gray-300 divide-y divide-gray-300">
                <thead>
                <tr>
                    {tableHeader("Title")}
                    {tableHeader("Platform")}
                    {tableHeader("Tags")}
                    {tableHeader("Description")}
                    {tableHeader("Transcription")}
                </tr>
                </thead>
                <tbody>
                {transcriptions.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        {getTd(tableLink(item))}
                        {getTd(item.platform)}
                        {getTd(item.tags)}
                        {getTd(item.summary)}
                        {getTd(showTranscription(item))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TranscriptionsTable;
