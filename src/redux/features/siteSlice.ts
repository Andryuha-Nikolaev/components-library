import { createSlice } from "@reduxjs/toolkit"

export type siteState = {
  isFixedHeader: boolean
  isBlockedScroll: boolean
}

const initialState = {
  isFixedHeader: true,
  isBlockedScroll: false,
} as siteState

export const site = createSlice({
  name: "dite",
  initialState,
  reducers: {
    setIsFixedHeader: (state, action: { payload: boolean }) => {
      state.isFixedHeader = action.payload
    },
    setIsBlockedScroll: (state, action: { payload: boolean }) => {
      state.isBlockedScroll = action.payload
    },
  },
})

export const { setIsFixedHeader, setIsBlockedScroll } = site.actions
export default site.reducer
