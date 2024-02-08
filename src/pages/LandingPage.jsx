import '../App.css'
import {useEffect, useState} from "react";
import {useTypingText} from "../hooks/useTypingText.jsx";
import InputForm from "../components/InputForm.jsx";
import ResponseShow from "../components/ResponseShow.jsx";
import {TranscriptionsShow} from "../components/TranscriptionsShow.jsx";
import ProgressBarDemo from "../components/ProgressBarDemo.jsx";
import {isLogged, request} from "../util/axios_util.jsx";
import axios from "axios";
import {notifyDefaultError} from "../util/toast_util.jsx";
import {toast} from "react-toastify";
import CountShow from "../components/CountShow.jsx";
import BenefitsSection from "../components/BenefitsSection.jsx";
import {CommonQuestions} from "../components/CommonQuestions.jsx";
import {YoutubeDemo} from "../components/YoutubeDemo.jsx";
import PricingTable from "../components/PricingTable.jsx";
import {SearchVideo} from "./SearchVideo.jsx";

import image from "../media/image2.webp";

function LandingImage() {
    return (
        <div className={"scale-75"}>
            <img src={image} alt={"landing-image"} className={"rounded-3xl shadow-md"}/>
        </div>
    );
}

export default function LandingPage() {
    const [link, setLink] = useState("")
    const [isValidLink, setIsValidLink] = useState(false);
    const [apiResponse, setApiResponse] = useState({
        title: "", summary: "", transcription: ""
    });
    const [isLoading, setIsLoading] = useState(false)
    const [showTranscription, setShowTranscription] = useState(false);
    const [transcriptions, setTranscriptions] = useState([]);
    const [isRetrieved, setIsRetrieved] = useState(false);
    const [ip, setIP] = useState("")
    const [count, setCount] = useState({
        totalCount: 3,
        count: 3
    });
    const [search, setSearch] = useState("");

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

    function handleSearchChange(event) {
        const value = event.target.value
        setSearch(value)
        if (value.length >= 3) {
            request('GET', `api/auth/video/search?query=${value}`, {})
                .then(response => {
                    console.log('fetching search')
                    setTranscriptions(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    notifyDefaultError()
                });
        }

        if (value.length === 0) {
            request('GET', `api/auth/videos`, {})
                .then(response => {
                    console.log('fetching all')
                    setTranscriptions(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    notifyDefaultError()
                });
        }
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
        if (count.count > 0) {
            const newCount = count.count - 1;
            setCount({...count, count: newCount})
        }
    }

    async function incrementCount() {
        //idk why it works
        if (count.count < count.totalCount) {
            const newCount = count.count;
            setCount({...count, count: newCount})
        }
    }

    function notifyExceededLimit() {
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
            setLink('')
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
            } else if (error.response && error.response.status === 408) {
                toast.warning("Video is too long. Come back later for results.")
            } else {
                notifyDefaultError()
            }
            setIsLoading(false)
            await incrementCount()
            setLink(link)
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

                if (!isRetrieved) {
                    const response = await request('GET', getVideosUrl, {})
                    setTranscriptions(response.data);
                    console.log(response.data)
                    setIsRetrieved(true);
                }
                const countResponse = await request('GET', getCountUrl, {})
                setCount(countResponse.data);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        if (!ip && !isRetrieved) {
            fetchData().then(() => console.log("Fetched data"));
        }

    }, [ip, isRetrieved]);

    function DescribeSection() {
        return <>
            <BenefitsSection/>
            <CommonQuestions/>
            <YoutubeDemo/>
            <div className={"main-gradient"}>
                <h2 className={"text-center text-5xl font-semibold text-white pt-10 pb-4"}>Pricing</h2>
                <PricingTable/>
            </div>
        </>;
    }

    function Hero() {
        return <div className={"flex flex-col items-center justify-center"}>
            <h1 className={"animate-fade-down animate-duration-700 flex flex-wrap text-5xl font-semibold text-white gap-x-4 gap-y-1 mb-2"}>
                Best way to organize informative content from
                <b className="min-w-[250px] md:min-w-[280px]">{supportedServices.word}</b>
            </h1>

            {!isLogged() && <h2
                className={"animate-fade-down animate-duration-700 text-white text-left text-2xl my-8"}>
                We bring your videos together: from any platform to one library, just by sharing a
                link.
                Leave the details to AI: it will automatically generate titles, tags, and summaries
                for
                you.
            </h2>}

            <InputForm value={link} onChange={handleInputChange}
                       disabled={isValidLink && !isLoading}
                       onClick={sendRequest}
                       isLogged={isLogged()}/>

            <CountShow count={count}/>

            {isLoading && <ProgressBarDemo/>}

            {link && !isValidLink && (
                <p className="bg-white text-red-500 w-6/12 mt-2 p-1 rounded-lg">Please enter
                    a
                    valid TikTok,
                    Instagram
                    or Youtube Shorts link.</p>)}

            {apiResponse.title && (
                <ResponseShow apiResponse={apiResponse} onClick={toggleTranscription}
                              showTranscription={showTranscription}/>
            )}
            {isLogged() && <SearchVideo value={search} onChange={handleSearchChange}/>}
            <TranscriptionsShow isTranscriptionsRetrieved={isRetrieved}
                                transcriptions={transcriptions}
                                isLogged={isLogged()}
            />
        </div>;
    }

    return (
        <div>
            <div
                className={"main-gradient scale-[.77] xs:scale-100 text-left p-6 sm:p-10 min-h-[88vh]  flex items-center justify-center max-w-full"}>
                {isLogged() && Hero()}
                {!isLogged() && <div
                    className={"flex flex-row flex-wrap justify-center items-center w-full gap-x-6"}>
                    <div className={"lg:w-[40vw] my-auto"}>
                        {Hero()}
                    </div>
                    <div className={"lg:w-[50vw]"}>
                        <LandingImage/>
                    </div>
                </div>}
            </div>
            {!isLogged() && DescribeSection()}
        </div>
    )
}