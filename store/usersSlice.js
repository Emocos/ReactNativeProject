import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        saveUsers(state, {payload}) {
            state.users = payload
        }
    }
})

export const { saveUsers } = usersSlice.actions
export default usersSlice.reducer