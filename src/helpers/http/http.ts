
const BASE_API = process.env.REACT_APP_BACKEND_URL
export const get = async (endpoint: string) => {
    const result = await fetch(`${BASE_API}${endpoint}`);
    return result.json();
}