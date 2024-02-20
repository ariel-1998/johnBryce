import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

interface AuthState {
    username: string;
    firstname: string;
    lastname: string;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: null as AuthState| null,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state = jwtDecode(action.payload);
            return state
        }
    }
})

export const { login } = authSlice.actions
export default authSlice.reducer;