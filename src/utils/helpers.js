import {get} from "../store/api/get";
import {PATHS} from "../store/api/paths";
import {lastWorksModel} from "../modelling/last_works";

export const makeId = () => {
    return Math.floor(Math.random() * 100000000000) + 100000000000
}

export const prepareCompare = (string) => {
    return String(string).replaceAll(" ", "").toUpperCase()
}

export const saveLocalStorage = (data, key) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
        seconds,
    )}`;
}

export function colorCond(whichIsRunning, isHeader = false, faultRunning) {
    const header = isHeader ? "-header" : ""

    return faultRunning
        ? (" bg-red" + header)
        : whichIsRunning === 1
            ? (" bg-orange" + header)
            : whichIsRunning === 2
                ? (" bg-green" + header)
                : "";
}

export function getLastWorks(
    selected_work_order,
    lastWorks,
    setLoading,
    setLastWorks,
    setError
) {
    if (selected_work_order && !lastWorks) {
        setLoading(true);
        get(
            PATHS.last_works(
                selected_work_order?.order,
                selected_work_order?.broadcasting,
                selected_work_order?.queue,
                selected_work_order?.operation_no
            ),
            (data) => setLastWorks(lastWorksModel(data)),
            setError,
            setLoading(false)
        );
    }
}

export function getLastWorksNoCond(
    selected_work_order,
    lastWorks,
    setLoading,
    setLastWorks,
    setError
) {
    setLoading(true);
    get(
        PATHS.last_works(
            selected_work_order?.order,
            selected_work_order?.broadcasting,
            selected_work_order?.queue,
            selected_work_order?.operation_no
        ),
        (data) => setLastWorks(lastWorksModel(data)),
        setError,
        setLoading(false)
    );
}