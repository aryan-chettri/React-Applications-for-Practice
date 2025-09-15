import { createSlice } from "@reduxjs/toolkit";

export const switcherSlice = createSlice({

    name: 'switcher',
    initialState: {
        value: 'null',
    },
    reducers:{
        redColor: (state, action) =>{
            state.value = action.payload
        },
    },
})

export const {redColor} = switcherSlice.actions

export default switcherSlice.reducer