import React from "react"
import s from "./ScrollWrapper.module.scss"
import RootStreak from "@/ui/other/RootStreak/RootStreak"

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="wrapper" className={s["wrapper"]}>
      <RootStreak variant="fixed-header" />
      {children}
    </div>
  )
}

export default ScrollWrapper
