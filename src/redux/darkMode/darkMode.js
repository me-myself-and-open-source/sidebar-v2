import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    //isDarkMode: () => (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? true : false,
    //isDarkMode: false,
    isDarkMode: localStorage.getItem("theme") === "dark" ? true : false,
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {

        toggleIsDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode

            const newTheme = state.isDarkMode ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
        },

        setDarkMode: (state, payload) => {
            state.isDarkMode = payload

            const newTheme = state.isDarkMode ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
        }
    },
})

// Action creators are generated for each case reducer function
export const { toggleIsDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer