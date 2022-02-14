import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    full: false,
    active: 'Home',
    navOpen: false
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {

        toggleSidebarFull: (state) => {
            state.full = !state.full
        },

        toggleTab: (state, action) => {
            console.log(action);
            state.active = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleSidebarFull, toggleTab } = sidebarSlice.actions

export default sidebarSlice.reducer