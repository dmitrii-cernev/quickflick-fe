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
                          description={"Boost your productivity by instantly generating video titles, descriptions, and tags with Minimemo, making content creation and organization effortless."}
                          icon={<MdOutlineAccessTime/>}
                    />
                    <Item title={"All In One Place"}
                          description={"Simplify your digital life by storing all your favorite videos from TikTok, Instagram, YouTube Shorts, and more in one easy-to-access place with Minimemo."}
                          icon={<TbWorldHeart/>}
                    />
                    <Item title={"99 languages"}
                          description={"Minimemo supports 99 languages, including English, Spanish, French, German, Chinese, Japanese, Korean, and more."}
                          icon={<IoLanguageOutline/>}
                    />
                    <Item title={"Smart Summaries"}
                          description={"We use ChatGPT to create quick, clear summaries from your videos, making them easy to follow."}
                          icon={<LuBrainCircuit/>}
                    />

                </div>
            </div>
        </div>
    )
}