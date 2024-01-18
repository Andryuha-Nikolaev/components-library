"use client"

import React from "react"
import classNames from "classnames"
import s from "./ModalWrapper.module.scss"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"
import { closeModal } from "@/redux/features/modalSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const ModalWrapper = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.modal.isOpen)

  console.log(isOpen)

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <div className={classNames(s["overlay"], isOpen && s["open"])}>
      <div className={classNames(s["modal"])}>
        <div onClick={handleClose} className={classNames(s["close-btn"])}>
          <CloseIcon color="#000" strokeColor="#000" form="rect" />
        </div>
        <div>ModalWrapper</div>
      </div>
    </div>
  )
}

export default ModalWrapper
