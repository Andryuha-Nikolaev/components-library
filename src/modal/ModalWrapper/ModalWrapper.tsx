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
import useScrollLock from "@/hooks/useScrollLock/useScrollLock"

const modalComponents: Record<string, React.FC<ModalConfig>> = {
  default: DefaultModal,
  alt: AltModal,
}

const ModalWrapper = () => {
  const dispatch = useAppDispatch()
  const { isOpen, config } = useAppSelector((state) => state.modal)
  const { modalId, notClickableOverlay, hiddenCloseBtn } = config

  const handleClose = () => {
    dispatch(closeModal())
  }

  useScrollLock(isOpen)

  const ModalComponent = modalComponents[modalId!] || DefaultModal

  return (
    <div
      onClick={() => {
        if (!notClickableOverlay) {
          handleClose()
        }
      }}
      className={classNames(s["overlay"], isOpen && s["open"])}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={classNames(s["modal"], isOpen && s["open"])}
      >
        {!hiddenCloseBtn && (
          <button onClick={handleClose} className={classNames(s["close-btn"])}>
            <CloseIcon color="#fff" strokeColor="transparent" form="round" />
          </button>
        )}
        <ModalComponent {...config} />
      </div>
    </div>
  )
}

export default ModalWrapper
