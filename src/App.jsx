import {Header} from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import FooterWithLogo from "./components/FooterWithLogo.jsx";

export default function App() {
    return (
        <main className="text-center">
            <Header/>
            <div className={"mx-auto my-16 sm:my-28"}>
                <Hero/>
            </div>
            <FooterWithLogo/>
        </main>
    );

}