import {Footer, FooterCopyright} from "flowbite-react";
import {FaLinkedin} from "react-icons/fa";

export default function FooterWithLogo() {
    return (
        <Footer className={"p-6 bg-opacity-30 rounded-none bottom-0"}>
            <div className={"w-full text-center flex items-center justify-center gap-4 px-8"}>
                <FooterCopyright href="#" by="Minimemo™" year={2024}/>
                <Footer.Icon icon={FaLinkedin}
                             href={"https://www.linkedin.com/in/dmitrii-cernev-35a0a517b/"}
                             target={"_blank"}
                />
            </div>
        </Footer>
    );
}