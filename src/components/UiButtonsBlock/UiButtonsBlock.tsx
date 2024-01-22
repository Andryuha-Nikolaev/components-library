"use client"

import React, { useState } from "react"
import s from "./UiButtonsBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import { useAppDispatch } from "@/redux/hooks"
import { openModal } from "@/redux/features/modalSlice"
import testImg from "@/assets/test/gothic2.jpg"
import RootText from "@/ui/texts/RootText/RootText"

const UiButtonsBlock = () => {
  const dispatch = useAppDispatch()
  const [openBlock, setOpenBlock] = useState(false)

  return (
    <div className={s["block"]}>
      <RootButton textTransform="uppercase">Кнопка вариант 1</RootButton>
      <RootButton className={s["btn"]} styleVariant="2">
        Кнопка вариант 2
      </RootButton>
      <RootButton buttonPosition="right">Кнопка позиция право</RootButton>
      <RootButton buttonPosition="left" styleVariant="2">
        Кнопка позиция лево
      </RootButton>
      <RootButton link="https://ya.ru/" role="link">
        Кнопка как обычная ссылка
      </RootButton>
      <p>
        текст{" "}
        <RootButton appearance="link" link="https://ya.ru/" role="link">
          ссылка как ссылка в тексте
        </RootButton>
        текст
      </p>
      <RootButton
        styleVariant="2"
        appearance="link"
        link="/blog"
        role="next-link"
      >
        ссылка некст
      </RootButton>
      <RootButton
        styleVariant="2"
        appearance="link"
        link="/ui"
        role="next-link"
        linkTarget="_blank"
      >
        ссылка некст на новую вкладку
      </RootButton>
      <RootButton isDisabled>заблоченная кнопка</RootButton>
      <RootButton
        isDisabled
        appearance="link"
        link="https://ya.ru/"
        role="link"
      >
        заблоченная ссылка
      </RootButton>
      <RootButton
        onClick={() => {
          console.log("aaaaaaaa")
        }}
        withArrow
      >
        Кнопка с действием и стрелкой
      </RootButton>
      <RootButton withArrow appearance="link" role="link" link="https://ya.ru/">
        Со стрелкой
      </RootButton>
      <RootButton
        appearance="link"
        role="button"
        onClick={() => {
          console.log("aaaaaaaa")
        }}
      >
        кнопка как ссылка
      </RootButton>
      <RootButton
        appearance="button"
        role="next-link"
        withArrow
        linkTarget="_blank"
        buttonPosition="right"
      >
        вид кнопка, роль ссылка некст, со стрелкой, на новую вкладку, справа
      </RootButton>
      <RootText tag="p">
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок Текстовый блок Текстовый блок Текстовый блок
        Текстовый блок Текстовый блок Текстовый блок Текстовый блок Текстовый
        блок Текстовый блок
      </RootText>
      <RootButton
        onClick={() => {
          dispatch(
            openModal({
              modalId: "default",
              image: testImg.src,
            })
          )
        }}
        styleVariant="2"
      >
        Открыть модалку default
      </RootButton>
      <RootButton
        onClick={() => {
          dispatch(openModal({ modalId: "alt" }))
        }}
        styleVariant="2"
      >
        Открыть модалку alt
      </RootButton>

      <div
        onClick={() => {
          setOpenBlock(!openBlock)
        }}
        className={s["block-height"]}
        style={{ height: openBlock ? 1400 : 50 }}
      >
        блок для высоты
      </div>
      <div style={{ height: 400, backgroundColor: "azure" }}>
        блок для высоты2
      </div>
    </div>
  )
}

export default UiButtonsBlock
