import { configureStore } from "@reduxjs/toolkit"
import counter from "./features/counterSlice"
import modal from "./features/modalSlice"
import site from "./features/siteSlice"

export const store = configureStore({
  reducer: {
    counter,
    modal,
    site,
  },
  devTools: process.env.NEXT_PUBLIC_BUILD_MODE !== "PROD",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
