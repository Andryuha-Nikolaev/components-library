import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ModalConfig = {
  modalId?: "default" | "alt"
  image?: string
  notClickableOverlay?: boolean
  hiddenCloseBtn?: boolean
}

type ModalState = {
  isOpen: boolean
  config: ModalConfig
}

const initialState = {
  isOpen: false,
  config: {
    modalId: undefined,
  },
} as ModalState

export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalConfig>) => {
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
