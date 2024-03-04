import { createSlice } from "@reduxjs/toolkit";














const userReducer = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },

        deleteUser: (state, action) => {
            return state.filter(user => user.id !== action.payload);
        }
    }

})

export const { addUser, deleteUser } = userReducer.actions;
export default userReducer.reducer;