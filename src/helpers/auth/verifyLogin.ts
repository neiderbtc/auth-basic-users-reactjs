import { unHashIng } from "../base64/hash64";
import { getLocalStorage } from "../localStorage/getLocalStorage";
import { removeLocalStorage } from "../localStorage/removeLocalStorage";
import { saveLocalStorage } from "../localStorage/saveLocalStorage";
import { createToken } from "../token/createToken";

export const verifyLogin = (user: { email: string; password: string }) => {
    const listUsers = getLocalStorage('users');
    let isLogin = false;
    if (listUsers) {

        const newListUsers = listUsers.map((item: { email: string; user: { password: string } }) => {
            if (item.email === user.email) {
                const password = unHashIng(item.user.password);
                if (password === user.password) {
                    const newToken = createToken();
                    saveLocalStorage('token', newToken);
                    isLogin = true;
                    return {
                        ...item,
                        token: newToken
                    }
                }
                removeLocalStorage('token');
                return item;
            }
            return item;
        })

        saveLocalStorage('users', newListUsers);
    }

    return isLogin;
}

