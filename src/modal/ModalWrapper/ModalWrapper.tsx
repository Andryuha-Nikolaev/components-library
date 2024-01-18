"use client"

import React from "react"
import classNames from "classnames"
import s from "./ModalWrapper.module.scss"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"
import { closeModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { ModalConfig } from "@/redux/features/modalSlice"
import DefaultModal from "../DefaultModal/DefaultModal"
import AltModal from "../AltModal/AltModal"

const modalComponents: Record<string, React.FC<ModalConfig>> = {
  default: DefaultModal,
  alt: AltModal,
}

const ModalWrapper = () => {
  const dispatch = useAppDispatch()
  const { isOpen, config } = useAppSelector((state) => state.modal)

  const handleClose = () => {
    dispatch(closeModal())
  }

  const ModalComponent = modalComponents[config.modalId!] || DefaultModal

  return (
    <div
      onClick={handleClose}
      className={classNames(s["overlay"], isOpen && s["open"])}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={classNames(s["modal"])}
      >
        <button onClick={handleClose} className={classNames(s["close-btn"])}>
          <CloseIcon color="#000" strokeColor="#000" form="rect" />
        </button>
        <div>
          <ModalComponent {...config} />
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
