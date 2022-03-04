import { combineReducers, configureStore } from '@reduxjs/toolkit'
import darkModeSlice from './darkMode/darkMode'
import sidebarSlice from './sidebar/sidebarSlice'

const reducer = combineReducers({
	sidebar: sidebarSlice,
		darkMode: darkModeSlice
})

export const store = configureStore({
	reducer,
})
