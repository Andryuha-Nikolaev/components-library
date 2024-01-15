"use client"

import React from "react"
import s from "./UiBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"

const UiBlock = () => {
  return (
    <div className={s["block"]}>
      <RootButton textTransform="uppercase">Кнопка вариант 1</RootButton>
      <RootButton styleVariant="2">Кнопка вариант 2</RootButton>
      <RootButton buttonPosition="right">Кнопка позиция право</RootButton>
      <RootButton buttonPosition="left" styleVariant="2">
        Кнопка позиция лево
      </RootButton>
      <RootButton link="https://ya.ru/" role="link">
        Кнопка как обычная ссылка
      </RootButton>
      <p>
        текст{" "}
        <RootButton template="link" link="https://ya.ru/" role="link">
          ссылка как ссылка в тексте
        </RootButton>
        текст
      </p>
      <RootButton
        styleVariant="2"
        template="link"
        link="/blog"
        role="next-link"
      >
        ссылка некст
      </RootButton>
      <RootButton isDisabled>заблоченная кнопка</RootButton>
      <RootButton isDisabled template="link" link="https://ya.ru/" role="link">
        заблоченная ссылка
      </RootButton>
      <RootButton
        onClick={() => {
          console.log("aaaaaaaa")
        }}
        withArrow
      >
        Кнопка с логом
      </RootButton>
      <RootButton withArrow template="link" role="link" link="https://ya.ru/">
        Со стрелкой
      </RootButton>
    </div>
  )
}

export default UiBlock
