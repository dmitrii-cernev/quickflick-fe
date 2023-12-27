export default function About() {
    return (<div
        className="w-11/12 mx-auto container text-left mb-6 min-h-screen bg-white bg-opacity-80 p-8 sm:p-20 rounded-xl animate-fade animate-duration-200">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>

        <div className="m-1 sm:m-6 p-2 sm:p-6 rounded-md shadow-md">
            <p className="text-lg mb-4">
                Welcome to <span className={"font-semibold"}>Minimemo</span>, where we make
                summarizing and transcribing short videos a breeze!
            </p>

            <p className="text-lg mb-4">
                Our platform is designed to help you easily summarize and transcribe short-form
                videos from popular social media platforms like TikTok, Instagram, and YouTube
                Shorts.
            </p>

            <h2 className="text-3xl font-bold mb-2">Our Goals</h2>
            <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Save Useful Videos: Our primary goal is to empower users to
                    save and store valuable content from social media.
                </li>
                <li className="mb-2">Efficient Summarization: We aim to provide an efficient way
                    to summarize content, making it easy to digest.
                </li>
                {/* Add more goals as needed */}
            </ul>
        </div>
        <p className="text-xl">
            Join us on this journey of simplifying and enhancing the way you interact with short
            videos on social media!
        </p>
    </div>)
}