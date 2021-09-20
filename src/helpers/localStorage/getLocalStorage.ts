export const getLocalStorage = (key: string) => {
    const searchKey = window.localStorage.getItem(key);
    const includes = searchKey?.includes('[{');
    
    if (!searchKey) return false;
    if(includes){
        return JSON.parse(searchKey);
    }
    return searchKey;
    
}