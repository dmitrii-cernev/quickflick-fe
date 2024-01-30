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
            <h1 className={"text-white text-5xl font-semibold p-8"}>Common Questions</h1>
            <Accordion className={"bg-white bg-opacity-80 md:w-1/2 mx-auto"}>
                {AccordionPanel("What is Minimemo?", "Minimemo is a SaaS (Software as a Service) product that allows users to save, summarize, and transcribe videos from various platforms such as TikTok, Reels, and Shorts. It simplifies the process of capturing key information from videos and organizing them in one place.")}
                {AccordionPanel("Who needs Minimemo?", "Minimemo is ideal for anyone who consumes or creates content on platforms like TikTok, Reels, or Shorts and wants to efficiently manage and extract valuable information from videos. It is particularly useful for content creators, students, professionals, and anyone looking to enhance their productivity by effectively summarizing and transcribing video content.")}
                {AccordionPanel("How does Minimemo work?", "Minimemo uses a combination of machine learning and natural language processing to summarize and transcribe videos. It uses a combination of computer vision and natural language processing to extract key information from videos and organize them in one place.")}
            </Accordion>
        </div>)
}