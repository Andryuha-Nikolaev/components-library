import React from "react"
import s from "./BurgerIcon.module.scss"
import classNames from "classnames"

type BurgerIconProps = {
  isOpen: boolean
}

const BurgerIcon = ({ isOpen }: BurgerIconProps) => {
  return (
    <div className={classNames(s["wrapper"])}>
      <div className={classNames(s["icon"], isOpen && s["open"])}>
        <div className={classNames(s["line-wrap"])}>
          <span className={classNames(s["line"])}></span>
        </div>
        <div className={classNames(s["line-wrap"])}>
          <span className={classNames(s["line"])}></span>
        </div>
        <div className={classNames(s["line-wrap"])}>
          <span className={classNames(s["line"])}></span>
        </div>
      </div>
    </div>
  )
}

export default BurgerIcon
