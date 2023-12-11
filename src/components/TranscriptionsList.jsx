import {useState} from 'react';

const TranscriptionsList = ({transcriptions}) => {
    // Initialize an array of states, one for each video
    const [activeVideos, setActiveVideos] = useState(Array(transcriptions.length).fill(false));

    // Function to toggle the description for a specific video
    const toggleDescription = (index) => {
        setActiveVideos((prevActiveVideos) => {
            const newActiveVideos = [...prevActiveVideos];
            newActiveVideos[index] = !newActiveVideos[index];
            return newActiveVideos;
        });
    };

    return (
        <ul className="mt-4 space-y-1 animate-fade-right animate-duration-500">
            {transcriptions.map((video, index) => (
                <li key={video.id} className="bg-white p-4 rounded-xl shadow-lg max-w-md">
                    <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleDescription(index)}
                    >
                        <a
                            href={video.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline w-10/12"
                        >
                            {video.title}
                        </a>
                        <span className="text-gray-400">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={activeVideos[index] ? "M19.5 8.25l-7.5 7.5-7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"}
                />
              </svg>
            </span>
                    </div>
                    {activeVideos[index] && (
                        <p className="text-gray-600 mt-2 overflow-hidden">
                            {video.description}
                        </p>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default TranscriptionsList;
