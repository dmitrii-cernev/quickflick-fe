import '../App.css'
import {useEffect, useState} from "react";
import {useTypingText} from "../hooks/useTypingText.jsx";
import InputForm from "./InputForm.jsx";
import ResponseShow from "./ResponseShow.jsx";
import {TranscriptionsShow} from "./TranscriptionsShow.jsx";
import ProgressBarDemo from "./ProgressBarDemo.jsx";
import {isLogged, request} from "../util/axios_util.jsx";
import axios from "axios";
import {notifyDefaultError} from "../util/toast_util.jsx";
import {toast} from "react-toastify";
import CountShow from "./CountShow.jsx";

export default function Hero() {
    const [link, setLink] = useState("")
    const [isValidLink, setIsValidLink] = useState(false);
    const [apiResponse, setApiResponse] = useState({
        title: "", summary: "", transcription: ""
    });
    const [isLoading, setIsLoading] = useState(false)
    const [showTranscription, setShowTranscription] = useState(false);
    const [transcriptions, setTranscriptions] = useState([]);
    const [transcriptionsRetrieved, setTranscriptionsRetrieved] = useState(false);
    const [ip, setIP] = useState("")
    const [count, setCount] = useState({
        totalCount: 3,
        count: 3
    });

    function handleInputChange(event) {
        const value = event.target.value
        setLink(value)
        const tiktokShortPattern = /^https:\/\/vm\.tiktok\.com\/\w+\/?$/;
        const tiktokLongPattern = /^https:\/\/(?:www\.)?tiktok\.com\/@[\w-]+\/video\/\d+\/?(\?.*)?$/;
        const instagramPattern = /^https:\/\/www\.instagram\.com\/reel\/[\w-]+(?:\/[^/?]+)?(?:[/?].*)?$/;
        const youtubePattern = /^(https?:\/\/)?(www\.)?youtube\.com\/shorts\/[a-zA-Z0-9_-]+(\?.*)?$/;
        const isValidLink = tiktokShortPattern.test(value) || instagramPattern.test(value) || tiktokLongPattern.test(value) || youtubePattern.test(value);
        setIsValidLink(isValidLink);
    }

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const pollTranscription = async (videoId) => {
        try {
            console.log(`Polling for video ${videoId}...`)
            const transcription = await request('GET', `api/open/video/${videoId}`, {})
            if (transcription.data.title && transcription.data.title.trim() !== "") {
                setApiResponse(transcription.data)
                setIsLoading(false)
            } else {
                await delay(1500)
                await pollTranscription(videoId)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false)
            notifyDefaultError()
        }
    }

    async function decrementCount() {
        //     decrement count by 1, if bigger than 0
        if (count.count > 0) {
            const newCount = count.count - 1;
            setCount({...count, count: newCount})
        }
    }

    function notifyExceededLimit() {
        // toast.warning("You have reached the maximum number of calls. Upgrade your plan to continue using the service.")
        toast.warning(<div>
            You have reached the maximum number of calls.
            {isLogged() ? " Upgrade your plan to continue using the service." : ""}
            {isLogged() &&
                <div>
                    <button
                        className="text-white bg-violet-500 py-1 px-2 focus:outline-none hover:bg-violet-600 rounded-2xl"
                        onClick={() => window.location.href = "/pricing"}>Upgrade
                    </button>
                </div>}
            {!isLogged() && <button
                className="ml-2 text-white bg-violet-500 py-1 px-2 focus:outline-none hover:bg-violet-600 rounded-2xl"
                onClick={() => window.location.href = "/register"}>Sign Up
            </button>}
        </div>)
    }

    const sendRequest = async () => {
        try {
            setIsLoading(true)
            await decrementCount()
            setApiResponse({title: "", summary: "", transcription: ""})
            const encodedLink = encodeURIComponent(link)
            const url = isLogged() ? `/api/auth/process?url=${encodedLink}` : `/api/open/process?url=${encodedLink}&userId=${ip}`;
            const videoId = await request('POST', url, {})
            await console.log(videoId.data)
            await pollTranscription(videoId.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            if (error.response && error.response.status === 400 && error.response.data.message === "No calls left") {
                notifyExceededLimit();
            } else {
                notifyDefaultError()
            }
            setIsLoading(false)
        }
    };

    const toggleTranscription = () => {
        setShowTranscription(!showTranscription);
    };

    let supportedServices = useTypingText(['TikTok', 'Instagram', 'Shorts'], 80, 50);

    const getIP = async () => {
        try {
            const ping = await request('GET', `/api/open/ping`, {})
            console.log(ping.data)
            const res = await axios.get("https://api.ipify.org/?format=json");
            const ipAddress = res.data.ip;
            setIP(ipAddress);
            return ipAddress;
        } catch (error) {
            console.error('An error occurred while getting IP:', error);
            notifyDefaultError();
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let getVideosUrl;
                let getCountUrl;
                if (isLogged()) {
                    getVideosUrl = `api/auth/videos`
                    getCountUrl = `api/subscription/count`
                } else {
                    const ipAddress = await getIP();
                    getVideosUrl = `api/open/videos/${ipAddress}`
                    getCountUrl = `api/open/subscription/count/${ipAddress}`
                }

                if (!transcriptionsRetrieved) {
                    const response = await request('GET', getVideosUrl, {})
                    console.log(response.data)
                    setTranscriptions(response.data);
                    setTranscriptionsRetrieved(true);
                }
                const countResponse = await request('GET', getCountUrl, {})
                setCount(countResponse.data);
                console.log(countResponse.data)
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        if (!ip) {
            fetchData();
        }

    }, [ip, transcriptionsRetrieved]);

    return (
        <div
            className={"scale-75 xs:scale-100 text-left p-8 min-h-screen flex items-center justify-center"}>
            <div className={"max-w-screen-lg flex flex-col items-center justify-center"}>
                <h1 className={"animate-fade-down animate-duration-700 flex flex-wrap text-5xl font-semibold text-white gap-x-4"}>Summarize
                    short videos from <b
                        className="min-w-[250px] md:min-w-[280px]">{supportedServices.word}</b>
                </h1>

                <InputForm value={link} onChange={handleInputChange}
                           disabled={isValidLink && !isLoading}
                           onClick={sendRequest}/>

                <CountShow count={count}/>

                {isLoading && <ProgressBarDemo/>}

                {link && !isValidLink && (
                    <p className="bg-white text-red-500 w-6/12 mt-2 p-1 rounded-lg">Please enter a
                        valid TikTok,
                        Instagram
                        or Youtube Shorts link.</p>)}

                {apiResponse.title && (
                    <ResponseShow apiResponse={apiResponse} onClick={toggleTranscription}
                                  showTranscription={showTranscription}/>
                )}
                <TranscriptionsShow transcriptionsRetrieved={transcriptionsRetrieved}
                                    transcriptions={transcriptions}/>
            </div>
        </div>)
}