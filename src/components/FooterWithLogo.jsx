import {Footer, FooterCopyright} from "flowbite-react";

export default function FooterWithLogo() {
    return (
        <Footer className={"p-6 bg-opacity-30"} container>
            <div className={"w-full text-center"}>
                <FooterCopyright href="#" by="MiniMemo™" year={2023}/>
            </div>
        </Footer>
    );
}