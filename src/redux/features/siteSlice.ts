import { createSlice } from "@reduxjs/toolkit"

export type siteCurrentViewport =
  | "mobile_sm"
  | "mobile_md"
  | "tablet"
  | "desktop_sm"
  | "desktop_md"

export type siteState = {
  isFixedHeader: boolean
  isBlockedScroll: boolean
  currentViewport?: siteCurrentViewport
  isTablet: boolean
  isMobile: boolean
  isTouchStart: boolean
}

const initialState = {
  isFixedHeader: true,
  isBlockedScroll: false,
  siteViewport: null,
  isTablet: false,
  isMobile: false,
  isTouchStart: false,
} as siteState

export const site = createSlice({
  name: "site",
  initialState,
  reducers: {
    setIsFixedHeader: (state, action: { payload: boolean }) => {
      state.isFixedHeader = action.payload
    },
    setIsBlockedScroll: (state, action: { payload: boolean }) => {
      state.isBlockedScroll = action.payload
    },
    setCurrentViewport: (state, action: { payload: siteCurrentViewport }) => {
      state.currentViewport = action.payload
      state.isTablet =
        action.payload === "mobile_sm" ||
        action.payload === "mobile_md" ||
        action.payload === "tablet"
      state.isMobile =
        action.payload === "mobile_sm" || action.payload === "mobile_md"
    },
    setIsTouchStart: (state, action: { payload: boolean }) => {
      state.isTouchStart = action.payload
    },
  },
})

export const {
  setIsFixedHeader,
  setIsBlockedScroll,
  setCurrentViewport,
  setIsTouchStart,
} = site.actions
export default site.reducer
