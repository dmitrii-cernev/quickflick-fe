import {MdOutlineAccessTime} from "react-icons/md";
import {TbWorldHeart} from "react-icons/tb";
import {IoLanguageOutline} from "react-icons/io5";
import {LuBrainCircuit} from "react-icons/lu";

function Item(props) {
    return (
        <div
            className={"flex flex-col mx-auto items-center w-72 h-72 p-4 bg-white bg-opacity-50 rounded-xl"}>
            <span className={"text-6xl text-gray-800"}>{props.icon}</span>
            <h3 className={"text-2xl mb-1 text-gray-800 font-bold"}>{props.title}</h3>
            <p className={"text-lg text-gray-800 text-center"}>{props.description}</p>
        </div>
    )
}

export default function BenefitsSection() {
    return (
        <div className={"main-gradient"}>
            <div className={"bg-white bg-opacity-40 w-full p-8 sm:px-14"}>
                <div className={"flex justify-between items-center flex-wrap gap-4"}>
                    <Item title={"Save time"}
                          description={"Minimemo will generate title, description, and tags for your videos in seconds. No more manual work. Just upload your video and get your summary."}
                          icon={<MdOutlineAccessTime/>}
                    />
                    <Item title={"All in one place"}
                          description={"Keep all your useful videos from different platforms in one place. No more switching between platforms."}
                          icon={<TbWorldHeart/>}
                    />
                    <Item title={"99 languages"}
                          description={"Minimemo supports 99 languages, including English, Spanish, French, German, Chinese, Japanese, Korean, and more."}
                          icon={<IoLanguageOutline/>}
                    />
                    <Item title={"Powered by ChatGPT"}
                          description={"We use ChatGPT to generate the summary of your videos. ChatGPT is a state-of-the-art language model that can generate human-like text."}
                          icon={<LuBrainCircuit/>}
                    />

                </div>
            </div>
        </div>
    )
}