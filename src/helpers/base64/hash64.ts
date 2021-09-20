export const hasdIng = (value: string) => {
    return window.btoa(value);
}

export const unHashIng = (value: string) => {
    return window.atob(value);
}