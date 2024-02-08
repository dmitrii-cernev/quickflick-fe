import {Accordion} from "flowbite-react";

export function CommonQuestions() {
    function AccordionPanel(title, description) {
        return <Accordion.Panel alwaysOpen>
            <Accordion.Title className={"text-gray-800 text-2xl"}>{title}</Accordion.Title>
            <Accordion.Content>
                <p className={"text-xl text-left"}>{description}</p>
            </Accordion.Content>
        </Accordion.Panel>;
    }

    return (
        <div className={"main-gradient mx-auto min-h-[85vh] p-4"}>
            <h2 className={"text-white text-5xl font-semibold p-8"}>Common Questions</h2>
            <Accordion className={"bg-white bg-opacity-80 md:w-1/2 mx-auto"}>
                {AccordionPanel("What is Minimemo and how does it work?",
                    "Minimemo is a cutting-edge platform that lets users save informative videos from popular social media platforms like TikTok, Instagram, and YouTube Shorts. Simply send a video link to Minimemo, and our service automatically generates a title, summary, tags, and a transcription based on the video's dialogue, making it easier to organize and retrieve your favorite content.")}
                {AccordionPanel("Who needs Minimemo?",
                    "Minimemo is perfect for anyone looking to organize and manage informative videos for education, professional development, content creation, or personal hobbies. Whether compiling educational resources, staying updated on industry trends, or gathering inspiration for creative projects, Minimemo's AI-powered summaries and tags streamline content organization and retrieval, making it an invaluable tool for learners, professionals, and enthusiasts alike.")}
                {AccordionPanel("What makes Minimemo different from bookmarking or saving videos directly on platforms?",
                    "Unlike basic bookmarking, Minimemo offers a unified place to save videos from multiple platforms and enhances them with AI-generated titles, summaries, and tags for easy organization and searchability. This unique feature set, designed for content enthusiasts and professionals alike, makes managing and retrieving valuable information from videos effortless.")}
                {AccordionPanel("How can I find specific content within the videos I've saved on Minimemo?",
                    "Minimemo's advanced search functionality allows you to quickly find specific content within your saved videos. By searching for keywords in titles, summaries, or tags, you can easily locate the information you need without watching the entire video again.")}
                {AccordionPanel("What measures does Minimemo take to protect user privacy and data?",
                    "User privacy and data security are our top priorities at Minimemo. We employ state-of-the-art encryption and follow stringent data protection regulations to ensure all user information and saved content are securely stored and handled.")}
            </Accordion>
        </div>)
}