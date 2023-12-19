import {Header} from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
    return (
        <main className={"container space-y-20"}>
            <Header/>
            <Hero/>
        </main>
    )
}