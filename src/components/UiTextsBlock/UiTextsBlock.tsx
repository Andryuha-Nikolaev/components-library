"use client"

import React from "react"
import s from "./UiTextsBlock.module.scss"
import RootText from "@/ui/texts/RootText/RootText"

const UiTextsBlock = () => {
  return (
    <div className={s["block"]}>
      <RootText tag="h1">Заголовок H1</RootText>
      <RootText tag="h2">Заголовок H2</RootText>
    </div>
  )
}

export default UiTextsBlock
