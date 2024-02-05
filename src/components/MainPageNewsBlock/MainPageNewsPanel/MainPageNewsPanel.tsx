"use client"

import React, { useState } from "react"
// import type { NewsProps } from "@/data/news"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import s from "./MainPageNewsPanel.module.scss"

const MainPageNewsPanel = () => {
  const [isNewsPanel, setIsNewsPanel] = useState(true)

  return (
    <div>
      <div className={s["buttons"]}>
        <RootButton
          styleVariant={isNewsPanel ? "2" : "3"}
          onClick={() => setIsNewsPanel(true)}
        >
          Новости
        </RootButton>

        <RootButton
          styleVariant={!isNewsPanel ? "2" : "3"}
          onClick={() => setIsNewsPanel(false)}
        >
          Объявления
        </RootButton>
      </div>
    </div>
  )
}

export default MainPageNewsPanel
