export const formDataToObject = (formData: FormData) => {
    let object: { [key: string]: string } = {};
    formData.forEach((value, key) => {
        object[key] = `${value}`;
    });

    return object;

}