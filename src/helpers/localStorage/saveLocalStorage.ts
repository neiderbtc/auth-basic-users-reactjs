export const saveLocalStorage = (key: string, value: string | object) => {
    if (typeof value === 'string') {
        window.localStorage.setItem(key, value);
        return true;
    }

    if (typeof value === 'object') {
        const valueSave = JSON.stringify(value);
        window.localStorage.setItem(key, valueSave);
        return true;
    }

}