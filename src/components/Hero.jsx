import '../App.css'
import {useEffect, useState} from "react";
import {useTypingText} from "../hooks/useTypingText.jsx";
import InputForm from "./InputForm.jsx";
import ResponseShow from "./ResponseShow.jsx";
import axios from "axios";
import {TranscriptionsShow} from "./TranscriptionsShow.jsx";
import ProgressBarDemo from "./ProgressBarDemo.jsx";

export default function Hero() {
    const host = "https://quickflick.duckdns.org"
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
            const transcription = await axios.get(`${host}/video/${videoId}`)
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
        }
    }
    const sendRequest = async () => {
        try {
            setIsLoading(true)
            setApiResponse({title: "", summary: "", transcription: ""})
            const encodedLink = encodeURIComponent(link)
            const videoId = await axios.post(`${host}/process?url=${encodedLink}&userId=${ip}`);
            await console.log(videoId.data)
            await pollTranscription(videoId.data)
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false)
        }
    };

    const toggleTranscription = () => {
        setShowTranscription(!showTranscription);
    };

    let supportedServices = useTypingText(['TikTok', 'Instagram', 'Shorts'], 80, 50);

    const getIP = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIP(res.data.ip);
    };

    useEffect(() => {
        getIP().then(async () => {
            console.log(ip);
            if (!transcriptionsRetrieved) {
                await fetch(`${host}/videos/${ip}`)
                    .then(response => response.json())
                    .then(response => {
                        setTranscriptions(response)
                        setTranscriptionsRetrieved(true)
                    })
            }
        });
    }, [ip, transcriptionsRetrieved, transcriptions]);


    return (
        <div className={"scale-75 xs:scale-100 text-left p-8 min-h-screen flex items-center justify-center"}>
            <div className={"max-w-screen-lg flex flex-col items-center justify-center"}>
                <h1 className={"animate-fade-down animate-duration-700 flex flex-wrap text-5xl font-semibold text-white gap-x-4"}>Summarize
                    short videos from <b
                        className="min-w-[250px] md:min-w-[280px]">{supportedServices.word}</b>
                </h1>

                <InputForm value={link} onChange={handleInputChange} disabled={isValidLink && !isLoading}
                           onClick={sendRequest}/>

                {isLoading && <ProgressBarDemo/>}

                {link && !isValidLink && (
                    <p className="bg-white text-red-500 w-6/12 mt-2 p-1 rounded-lg">Please enter a valid TikTok,
                        Instagram
                        or Youtube Shorts link.</p>)}

                {apiResponse.title && (
                    <ResponseShow apiResponse={apiResponse} onClick={toggleTranscription}
                                  showTranscription={showTranscription}/>
                )}
                <TranscriptionsShow transcriptionsRetrieved={transcriptionsRetrieved} transcriptions={transcriptions}/>
            </div>
        </div>)
}