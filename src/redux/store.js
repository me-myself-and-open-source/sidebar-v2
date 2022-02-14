import { configureStore } from '@reduxjs/toolkit'
import sidebarSlice from './sidebar/sidebarSlice'

export const store = configureStore({
  reducer: {
      sidebar: sidebarSlice
  },
})
