import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    full: false,
    active: 'Dashboard',
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
            state.active = action.payload
        },

        toggleNavOpen: (state) => {
            state.navOpen = !state.navOpen
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleSidebarFull, toggleTab, toggleNavOpen } = sidebarSlice.actions

export default sidebarSlice.reducer