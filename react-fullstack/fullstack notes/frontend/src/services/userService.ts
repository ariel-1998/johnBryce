import axios from "axios";
import { UserModel } from "../models/UserModel";
import apiconfig from "../utils/config";

class UserService {
    async register(user: UserModel): Promise<void> {
        const { data } = await axios.post(`${apiconfig.API_URL}/register`, user, {
        })
        window.localStorage.setItem('token', data);
    }

    async login(username: string, password: string): Promise<void> {
            try {
                const user = { username, password }
            const { data } = await axios.post(`${apiconfig.API_URL}/login`,
                user);
            window.localStorage.setItem('token', data);
            } catch (error) {
                console.log(error)
            }
    }
}

const userService = new UserService();
export default userService;