import { hasdIng } from "../base64/hash64";
import { getLocalStorage } from "../localStorage/getLocalStorage";
import { saveLocalStorage } from "../localStorage/saveLocalStorage";

export const ValidateRegister = (user: {email: string; password: string}) => {
    const listUsersStorage: { email: string }[] = getLocalStorage('users');
    user.password = hasdIng(`${user.password}`)
    const dataSave = {
        email: user.email,
        user: user
    }
    if (listUsersStorage) {
        const exists = listUsersStorage.find((item: { email: string }) => item.email === user.email);
        if (!exists) {
            saveLocalStorage('users', [...listUsersStorage, dataSave]);
            return true;
        }
        return false;

    } else {
        saveLocalStorage('users', [dataSave]);
    }

    return user;
}