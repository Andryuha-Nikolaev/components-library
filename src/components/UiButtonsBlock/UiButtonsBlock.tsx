"use client"

import React from "react"
import s from "./UiButtonsBlock.module.scss"
import RootButton from "@/ui/buttons/RootButton/RootButton"
// import { useAppDispatch } from "@/redux/hooks"
// import { openModal } from "@/redux/features/modalSlice"
// import testImg from "@/assets/test/test1.webp"
import RootText from "@/ui/texts/RootText/RootText"
import ScrollTopButton from "@/ui/buttons/ScrollTopButton/ScrollTopButton"
import CloseIcon from "@/ui/icons/CloseIcon/CloseIcon"
import CopyIcon from "@/ui/icons/CopyIcon/CopyIcon"
import SocialMediaBlock from "@/ui/social-media/SocialMediaBlock/SocialMediaBlock"
import FederationFilter from "@/ui/federation/FederationFilter/FederationFilter"

const UiButtonsBlock = () => {
  // const dispatch = useAppDispatch()

  return (
    <div className={s["block"]}>
      <RootText tag="h6" fontVariant="russo">
        Radio:
      </RootText>
      <div style={{ fontSize: 14 }} className={s["wrap"]}>
        <FederationFilter />
      </div>

      <RootText tag="h6" fontVariant="russo">
        Links:
      </RootText>
      <div style={{ fontSize: 14 }} className={s["wrap"]}>
        <RootButton appearance="link">Наша история</RootButton>
        <RootButton withArrow appearance="link" styleVariant="2">
          Наша история
        </RootButton>
      </div>
      <div>
        <RootText tag="h6" fontVariant="russo">
          Buttons:
        </RootText>
      </div>

      <div className={s["wrap"]}>
        <div style={{ maxWidth: 238 }}>
          <RootButton>Узнать подробнее</RootButton>
        </div>
        <div style={{ maxWidth: 238 }}>
          <RootButton styleVariant="2">Узнать подробнее</RootButton>
        </div>
        <ScrollTopButton />
        <button style={{ width: 40, height: 40 }}>
          <CloseIcon color="#fff" strokeColor="transparent" form="round" />
        </button>
        <button style={{ width: 40, height: 40 }}>
          <CopyIcon />
        </button>
      </div>
      <div>
        <RootText tag="h6" fontVariant="russo">
          Social media:
        </RootText>
        <RootText tag="p" as="span">
          (брал из макета главной страницы, ховер из ui kit)
        </RootText>
      </div>

      <div className={s["wrap"]}>
        <SocialMediaBlock variant="header" />
      </div>

      {/* <RootButton
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
      </RootButton> */}
    </div>
  )
}

export default UiButtonsBlock
