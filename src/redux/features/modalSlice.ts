import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ModalState = {
  isOpen: boolean
}

const initialState = {
  isOpen: false,
} as ModalState

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
