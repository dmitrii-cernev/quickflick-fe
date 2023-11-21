import '../App.css'
import {useState} from "react";

export default function Hero() {
    const [link, setLink] = useState("")
    const [isValidLink, setIsValidLink] = useState(false);
    const [apiResponse, setApiResponse] = useState({
        title: "", summary: "", transcription: ""
    });
    const [showTranscription, setShowTranscription] = useState(false);

    function handleInputChange(event) {
        const value = event.target.value
        setLink(value)
        const tiktokPattern = /^https:\/\/www\.tiktok\.com\/@[\w\d-]+\/video\/\d+(\?.*)?$/;
        const instagramPattern = /^https:\/\/www\.instagram\.com\/reel\/[\w-]+(?:\/[^/?]+)?(?:[/?].*)?$/;
        const isValidLink = tiktokPattern.test(value) || instagramPattern.test(value);
        setIsValidLink(isValidLink);
    }

    const sendRequest = async () => {
        try {
            const encodedLink = encodeURIComponent(link)
            const callback = await fetch(`http://localhost:8080/process?url=${encodedLink}`);
            const jsonResponse = await callback.json();
            console.log(jsonResponse)
            setApiResponse(jsonResponse);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const toggleTranscription = () => {
        setShowTranscription(!showTranscription);
    };

    return (<div className={"hero p-8 min-h-screen flex items-center justify-center"}>
        <div className={"max-w-screen-lg"}>
            <h1 className={"text-5xl font-semibold text-gray-50"}>Summarize short videos from <b>TikTok</b></h1>
            <form className={"flex mt-4 w-full md:w-90"}>
                <input
                    className={"flex-1 py-4 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 "}
                    type={"text"}
                    placeholder={"https://www.tiktok.com/@weevelanguages/video/7296481599242243361?_t=8h7MLbMVA7Z&_r=1"}
                    name={"link"}
                    value={link}
                    onChange={handleInputChange}
                />
                <button
                    className={"bg-gradient-to-r from-blue-300 to-pink-400 text-white py-4 px-8 rounded-r-full hover:from-blue-300 hover:to-pink-600 focus:outline-none focus:shadow-outline-pink active:scale-95 transition-transform duration-100 ease-in-out text-lg font-semibold disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"}
                    type={"button"}
                    disabled={!isValidLink}
                    onClick={sendRequest}
                >Send!
                </button>
            </form>
            {link && !isValidLink && (
                <p className="bg-white text-red-500 w-60 mt-2">Please enter a valid TikTok or Instagram link.</p>)}

            {apiResponse.title && (
                <div className="bg-white mt-4 p-4 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">{apiResponse.title}</h2>
                    <p className="text-gray-600">{apiResponse.summary}</p>
                    <button
                        className="text-blue-500 underline"
                        onClick={toggleTranscription}
                    >
                        {showTranscription ? 'Hide Transcription' : 'Show Transcription'}
                    </button>
                    {showTranscription && apiResponse.transcription &&
                        (<div className="mt-2">
                                <p className="text-gray-600">{apiResponse.transcription}</p>
                            </div>
                        )}
                </div>
            )}
        </div>
    </div>)
}