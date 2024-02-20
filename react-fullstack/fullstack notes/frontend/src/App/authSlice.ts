import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import jwtDecode from "jwt-decode"
import { UserModel } from "../models/UserModel"

interface UserToken {
    user: UserModel;
}

let initialState = null

const token = window.localStorage.getItem('token')
if (token) {
    const { user } = jwtDecode<UserToken>(token);
    initialState = user
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const { user } = jwtDecode<UserToken>(action.payload);
            window.localStorage.setItem('token', action.payload);
            state = user;
            return state;
        },
        logout: (state) => {
            state = null;
            window.localStorage.removeItem('token');
            return state;
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;