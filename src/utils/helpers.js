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