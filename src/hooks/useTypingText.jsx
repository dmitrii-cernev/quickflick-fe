import {useEffect, useRef, useState} from 'react';

const FORWARD = 'forward';
const BACKWARD = 'backward';
// get from: https://www.letsbuildui.dev/articles/a-typing-text-effect-with-react-hooks/
export const useTypingText = (words, keySpeed = 1000, maxPauseAmount = 10,) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));

    const direction = useRef(BACKWARD);
    const typingInterval = useRef();
    const letterIndex = useRef();

    const [isStopped, setIsStopped] = useState(false);
    const stop = () => {
        clearInterval(typingInterval.current);
        setIsStopped(true);
    }

    useEffect(() => {
        const backspace = () => {
            if (letterIndex.current === 0) {
                const isOnLastWord = wordIndex === words.length - 1;
                setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
                direction.current = FORWARD;
                return;
            }
            const segment = currentWord.slice(0, currentWord.length - 1);
            setCurrentWord(segment);
            letterIndex.current = currentWord.length - 1;
        }
        let pauseCounter = 0;
        if (isStopped) return;
        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = BACKWARD;

                pauseCounter = maxPauseAmount;
                return;
            }

            const segment = words[wordIndex].split('');
            setCurrentWord(currentWord.concat(segment[letterIndex.current]));
            letterIndex.current = letterIndex.current + 1;
        }

        typingInterval.current = setInterval(() => {
            if (pauseCounter > 0) {
                pauseCounter = pauseCounter - 1;
                return;
            }
            if (direction.current === FORWARD) {
                typeLetter();
            } else {
                backspace();
            }
        }, keySpeed);

        return () => {
            clearInterval(typingInterval.current);
        }
    }, [currentWord, wordIndex, keySpeed, words, isStopped, maxPauseAmount]);

    return {
        word: (<span className={`word ${currentWord.length ? 'full' : 'empty'}`}>
            {/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
            <span>{currentWord.length ? currentWord.join('') : '0'}</span>
            {/* eslint-disable-next-line no-mixed-spaces-and-tabs */}
	    </span>),
        start: () => setIsStopped(false),
        stop,
    };
}