"use client"

import React from "react"
import s from "./ScrollWrapper.module.scss"
import RootStreak from "@/ui/other/RootStreak/RootStreak"
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

const ScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SimpleBar className={s["scroll-bar"]}>
      <div id="wrapper" className={s["wrapper"]}>
        <RootStreak variant="fixed-header" />
        {children}
      </div>
    </SimpleBar>
  )
}

export default ScrollWrapper
