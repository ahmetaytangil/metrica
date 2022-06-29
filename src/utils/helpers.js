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