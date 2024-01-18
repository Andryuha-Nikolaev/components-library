import React from "react"
import classNames from "classnames"
import s from "./ModalWrapper.module.scss"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"

const ModalWrapper = () => {
  return (
    <div className={classNames(s["overlay"])}>
      <div className={classNames(s["modal"])}>
        <div className={classNames(s["close-icon"])}>
          <CloseIcon color="#000" strokeColor="#000" form="rect" />
        </div>
        <div>ModalWrapper</div>
      </div>
    </div>
  )
}

export default ModalWrapper
