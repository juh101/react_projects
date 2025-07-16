import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: null,
        status: false,
    },
    reducers: {
        login: (state, actions) => {
            state.userData = actions.payload;
            state.status = true;
        },
        logout: (state) => {
            state.userData = null;
            state.status = false;
        }

    }
})

export default authSlice.reducer;
export const {login, logout} = authSlice.actions;