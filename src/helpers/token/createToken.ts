const createRandom = () => {
    return Math.random().toString(36).substr(2);
};
 
export const createToken = () => {
    return createRandom() + createRandom() + createRandom() + createRandom();
}
