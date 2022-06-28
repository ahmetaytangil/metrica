import {useEffect, useState} from "react";

export default function useStopWatch() {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    useEffect(() => {
        if (time !== 0 && !running) {
            console.log('a')
            setRunning(true)
        }
    }, [time, running])

    return {
        setRunning,
        time,
        running,
        setTime
    }
};