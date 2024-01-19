import React from "react"
import s from "./ScrollWrapper.module.scss"

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapper" className={s["wrapper"]}>
      {children}
    </div>
  )
}

export default ScrollWrapper
