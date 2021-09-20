export const objectIsEmpty = (object: object) => {
    const keys = Object.keys(object);
    if (keys.length) {
        return false;
    }
    return true;
}

