import axios from "axios";

class AuthService {

    async login(username: string, password: string) {
        try {
            const { data } = await axios.post("https://localhost:3030/api/auth/login", {username, password})
            return data;
        } catch(e) {
            console.log(e);
            return '';
        }
    }

    async register(username: string, password: string, firstname: string, lastname: string) {
        try {
            const { data } = await axios.post("https://localhost:3030/api/auth/register", {username, password ,firstname, lastname})
            return data;
        } catch(e) {
            console.log(e);
            return '';
        }
    }
}

export const authService = new AuthService()