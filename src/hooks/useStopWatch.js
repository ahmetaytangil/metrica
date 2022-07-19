import {useEffect, useState} from "react";

export default function useStopWatch(running) {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return {
        time,
        setTime
    }
};