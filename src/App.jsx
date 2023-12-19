import {Header} from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

export default function App() {
    return (
        <main className={"flex justify-center w-full space-y-20"}>
            <Header/>
            <Hero/>
        </main>
    )
}