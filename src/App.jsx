import LandingPage from "./pages/LandingPage.jsx";
import FooterWithLogo from "./components/FooterWithLogo.jsx";
import Header from "./components/Header.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";
import ApiPage from "./pages/ApiPage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import CustomerPortal from "./pages/CustomerPortal.jsx";

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
        <main className="text-center pt-14 sm:pt-18">
            <Header/>
            <ToastContainer limit={3}
                            toastClassName={({type}) => contextClass[type || "default"] + " rounded-2xl m-2 p-2 text-gray-800 border-solid border-black relative flex p-1 min-h-10 justify-between overflow-hidden cursor-pointer"}/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/api" element={<ApiPage/>}/>
                <Route path="/pricing" element={<PricingPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/register"} element={<RegistrationPage/>}/>
                <Route path={"/cabinet"} element={<CustomerPortal/>}/>
                <Route path="*" element={<h1 className={"min-h-screen"}>Not Found</h1>}/>
            </Routes>
            <FooterWithLogo/>
        </main>
    );

}