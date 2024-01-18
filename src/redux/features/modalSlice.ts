import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ModalConfig = {
  modalId?: "default" | "alt"
}

type ModalState = {
  isOpen: boolean
  config: ModalConfig
}

const initialState = {
  isOpen: false,
  config: {
    modalId: "default",
  },
} as ModalState

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: { payload: ModalConfig }) => {
      state.isOpen = true
      state.config = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export const { openModal, closeModal } = modal.actions
export default modal.reducer
