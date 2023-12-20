import {useEffect, useState} from 'react';
import ProgressBar from "./ProgressBar.jsx";

export default function ProgressBarDemo(props) {
    const [progress, setProgress] = useState(0);

    const updateProgressBar = () => {
        const steps = 100; // Number of steps
        const pauses = generateRandomArray(10); // Array of pauses

        let currentStep = 0;

        const update = () => {
            setProgress((prev) => (prev < 100 ? prev + 1 : prev));
            currentStep += 1;

            if (pauses.includes(currentStep)) {
                setTimeout(update, randomIntFromInterval(1250, 3800));
            } else if (currentStep < steps) {
                setTimeout(update, randomIntFromInterval(70, 220));
            }
        };

        update();
    };

    useEffect(() => {
        updateProgressBar();
    }, []); // Run once on mount

    function generateRandomArray(steps) {
        const size = Math.floor(Math.random() * (steps - 2)) + 4;
        return Array.from({length: size}, () => Math.floor(Math.random() * 100) + 1);
    }

    function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    return <ProgressBar value={progress}/>;
}
