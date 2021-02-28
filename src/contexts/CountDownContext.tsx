import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

let countDownTimout: NodeJS.Timeout;

interface CountDownContextData {
    minutes:number;
    seconds:number;
    hadFinished:boolean;
    isActive:boolean;
    startCountDown:()=>void;
    resetCountDown:()=>void;
}

interface CountDownProviderProps {
    children: ReactNode;
}


export const CountDownContext = createContext({} as CountDownContextData);

export function CountDownProvider({ children }: CountDownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hadFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;


    function startCountDown() {
        setIsActive(true);

    }
    function resetCountDown() {
        clearTimeout(countDownTimout);
        setIsActive(false);
        setTime(0.1 * 60);
        setHasFinished(false);
    }
    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimout = setTimeout(() => {
                setTime(time - 1)
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();

        }
    }, [isActive, time])
    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            hadFinished,
            isActive,
            startCountDown,
            resetCountDown
        }}>
            {children}
        </CountDownContext.Provider>
    )
}