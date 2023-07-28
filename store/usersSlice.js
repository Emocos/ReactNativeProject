import {createSlice} from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [
            {
                id: 1,
                name: 'Maksim'
            }
        ]
    },
    reducers: {
        saveUsers(state, {payload}) {
            console.log(payload)
        }
    }
})

export const { saveUsers } = usersSlice.actions
export default usersSlice.reducer