// eslint-disable-next-line react/prop-types
const TranscriptionsTable = ({transcriptions}) => {
    return (
        <div className={"m-4 rounded-xl overflow-hidden shadow-md animate-fade-up animate-duration-700"}>
            <table className="min-w-full max-w-md md:max-w-full border border-gray-300 divide-y divide-gray-300">
                <thead>
                <tr>
                    <th className="py-2 px-4 bg-gray-100 border-b">Title</th>
                    <th className="py-2 px-4 bg-gray-100 border-b">Platform</th>
                    <th className="py-2 px-4 bg-gray-100 border-b">Description</th>
                    <th className="py-2 px-4 bg-gray-100 border-b">Video URL</th>
                </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                {transcriptions.map((transcription, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-2 px-4 border-b">{transcription.title}</td>
                        <td className="py-2 px-4 border-b">{transcription.platform}</td>
                        <td className="py-2 px-4 border-b">{transcription.summary}</td>
                        <td className="py-2 px-4 border-b">
                            <a
                                href={transcription.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View Video
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TranscriptionsTable;
