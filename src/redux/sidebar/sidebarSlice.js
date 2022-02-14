import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    full: false,
    active: 'home',
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

        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleSidebarFull, toggleTab } = sidebarSlice.actions

export default sidebarSlice.reducer