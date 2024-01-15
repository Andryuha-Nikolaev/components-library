import React from "react"
import s from "./UiBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"

const UiBlock = () => {
  return (
    <div className={s["block"]}>
      <RootButton>Кнопка вариант 1</RootButton>
    </div>
  )
}

export default UiBlock
