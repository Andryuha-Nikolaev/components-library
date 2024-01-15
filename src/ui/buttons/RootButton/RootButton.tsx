import React from "react"
import s from "./RootButton.module.scss"
import classNames from "classnames"

type RootButtonProps = {
  children: React.ReactNode
  variant?: "1" | "2" | "3" | "4"
}

const RootButton = ({ children, variant = "1" }: RootButtonProps) => {
  return (
    <button className={classNames(s["button"], s[`var${variant}`])}>
      {children}
    </button>
  )
}

export default RootButton
