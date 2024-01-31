import {Footer, FooterCopyright} from "flowbite-react";
import {FaLinkedin} from "react-icons/fa";

export default function FooterWithLogo() {
    function productHuntLink() {
        return <a
            href="https://www.producthunt.com/posts/minimemo?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-minimemo"
            target="_blank" rel="noopener noreferrer"
            className={"mx-auto w-44 pt-2 sm:w-fit sm:p-0"}
        >
            <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=437326&theme=neutral"
                alt="Minimemo - Summarize and save videos from TikTok, Reels and Shorts! | Product Hunt"
            />
        </a>;
    }

    return (
        <div className={"main-gradient"}>
            <Footer className={"bg-white bg-opacity-30 p-6 rounded-none bottom-0"}>
                <div
                    className={"flex justify-between items-center flex-wrap sm:flex-nowrap mx-auto w-full sm:px-20"}>
                    <div className={"sm:w-60"}></div>
                    <div
                        className={"w-full text-center flex items-center justify-center gap-4 "}>
                        <FooterCopyright href="#" by="Minimemo™" year={2024}/>
                        <Footer.Icon icon={FaLinkedin}
                                     href={"https://www.linkedin.com/in/dmitrii-cernev-35a0a517b/"}
                                     target={"_blank"}
                        />
                    </div>
                    {productHuntLink()}
                </div>
            </Footer></div>);
}