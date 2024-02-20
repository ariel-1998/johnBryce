import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value:0
    } as CounterState,
    reducers: {
        add: state => ({
            value: state.value + 1
        }),
        addValue: (state, action: PayloadAction<number>) => ({
            value: state.value + action.payload
        })
    }
});

export const {add, addValue} = counterSlice.actions;
export default counterSlice.reducer;