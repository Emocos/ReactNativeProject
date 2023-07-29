import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        saveUsers(state, {payload}) {
            state.users = payload
        },
        addNewUser(state, {payload}) {
            state.users.push(payload)
        },
        deleteUser(state, {payload}) {
            state.users = state.users.filter(user => user.id !== payload)
        }
    }
})

export const { saveUsers, addNewUser, deleteUser } = usersSlice.actions
export default usersSlice.reducer