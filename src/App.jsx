import Hero from "./components/Hero.jsx";
import FooterWithLogo from "./components/FooterWithLogo.jsx";
import Header from "./components/Header.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    const contextClass = {
        success: "bg-green-50",
        error: "bg-red-50",
        info: "bg-gray-50",
        warning: "bg-orange-50",
        default: "bg-indigo-50",
        dark: "bg-white-500 font-gray-100",
    }
    return (
        <main className="text-center">
            <Header/>
            <ToastContainer limit={3}
                            toastClassName={({type}) => contextClass[type || "default"] + " rounded-2xl m-2 p-2 text-gray-800 border-solid border-black relative flex p-1 min-h-10 justify-between overflow-hidden cursor-pointer"}/>
            <div className={"mx-auto my-16 sm:my-28"}>
                <Hero/>
            </div>
            <FooterWithLogo/>
        </main>
    );

}