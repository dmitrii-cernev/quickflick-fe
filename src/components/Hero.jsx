import '../App.css'
import {useState} from "react";
import {useTypingText} from "../hooks/useTypingText.jsx";
import InputForm from "./InputForm.jsx";
import ResponseShow from "./ResponseShow.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";


export default function Hero() {
    const [link, setLink] = useState("")
    const [isValidLink, setIsValidLink] = useState(false);
    const [apiResponse, setApiResponse] = useState({
        title: "", summary: "", transcription: ""
    });
    const [isLoading, setIsLoading] = useState(false)
    const [showTranscription, setShowTranscription] = useState(false);

    function handleInputChange(event) {
        const value = event.target.value
        setLink(value)
        const tiktokShortPattern = /^https:\/\/vm\.tiktok\.com\/\w+\/?$/;
        const tiktokLongPattern = /^https:\/\/(?:www\.)?tiktok\.com\/@[\w-]+\/video\/\d+\/?(\?.*)?$/;
        const instagramPattern = /^https:\/\/www\.instagram\.com\/reel\/[\w-]+(?:\/[^/?]+)?(?:[/?].*)?$/;
        const isValidLink = tiktokShortPattern.test(value) || instagramPattern.test(value) || tiktokLongPattern.test(value);
        setIsValidLink(isValidLink);
    }

    const sendRequest = async () => {
        try {
            setIsLoading(true)
            const encodedLink = encodeURIComponent(link)
            await fetch(`http://3.231.164.83:8080/process?url=${encodedLink}`)
                .then(response => response.json())
                .then(response => {
                    setApiResponse(response)
                    setIsLoading(false)
                })
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false)
        }
    };

    const toggleTranscription = () => {
        setShowTranscription(!showTranscription);
    };

    let supportedServices = useTypingText(['TikTok', 'Instagram'], 80, 35);

    return (<div className={"hero p-8 min-h-screen flex items-center justify-center"}>
        <div className={"max-w-screen-lg"}>
            <h1 className={"animate-fade-down animate-duration-700 flex flex-wrap text-5xl font-semibold text-white gap-x-4"}>Summarize
                short videos from <b
                className="min-w-[250px]">{supportedServices.word}</b>
            </h1>

            <InputForm value={link} onChange={handleInputChange} disabled={isValidLink && !isLoading}
                       onClick={sendRequest}/>

            {isLoading && <LoadingSpinner/>}

            {link && !isValidLink && (
                <p className="bg-white text-red-500 w-80 mt-2 p-1 rounded-lg">Please enter a valid TikTok or Instagram
                    link.</p>)}

            {apiResponse.title && (
                <ResponseShow apiResponse={apiResponse} onClick={toggleTranscription}
                              showTranscription={showTranscription}/>
            )}
        </div>
    </div>)
}