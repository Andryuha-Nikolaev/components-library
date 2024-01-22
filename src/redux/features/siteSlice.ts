import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type siteState = {
  isFixedHeader: boolean
}

const initialState = {
  isFixedHeader: true,
} as siteState

export const site = createSlice({
  name: "dite",
  initialState,
  reducers: {
    setIsFixedHeader: (state, action: { payload: boolean }) => {
      state.isFixedHeader = action.payload
    },
  },
})

export const { setIsFixedHeader } = site.actions
export default site.reducer
