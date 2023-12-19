import {Header} from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
    return (
        <main className="flex flex-col items-center justify-center space-y-28 h-full">
            <Header/>
            <Hero/>
        </main>
    );

}