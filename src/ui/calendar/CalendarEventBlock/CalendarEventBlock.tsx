"use client"

import React, { useState, useRef } from "react"
import s from "./CalendarEventBlock.module.scss"
import classNames from "classnames"
import RootButton from "@/ui/buttons/RootButton/RootButton"
import RootText from "@/ui/texts/RootText/RootText"
import Image from "next/image"
import image from "@/assets/test/judo-test.png"
import PointIcon from "@/ui/icons/PointIcon/PointIcon"
import CalendarEventMenu from "./components/CalendarEventMenu/CalendarEventMenu"
import useClickOutside from "@/hooks/useClickOutside/useClickOutside"
import useResize from "@/hooks/useResize/useResize"

type CalendarEventBlockProps = {
  page: "home" | "calendar"
}

const CalendarEventBlock = ({ page }: CalendarEventBlockProps) => {
  const [isOpen, setIsOpen] = useState(false)
  // const [isOpenMob, setIsOpenMob] = useState(false)

  const elRefMob = useRef<HTMLDivElement>(null)
  const elRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  const isOpenToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const { isСonditionFulfilled } = useResize({
    moreOrLess: "less",
    moreOrLessValue: 1024,
  })

  useClickOutside({
    elementRefs: [elRefMob, elRef, btnRef],
    isOpen: isOpen,
    onClose: handleClose,
    onListener: isСonditionFulfilled,
  })

  return (
    <div className={classNames(s["wrapper"], s[page])}>
      <div className={classNames(s["block"], s[page])}>
        <div className={classNames(s["container"])}>
          <div className={classNames(s["main-content"])}>
            <div className={classNames(s["time"])}>
              <RootText tag="h6" fontVariant="russo">
                10-28
              </RootText>
              <RootText fontVariant="russo">дек 2023</RootText>
            </div>
            <div className={classNames(s["text-block"])}>
              <div className={classNames(s["img-wrap"])}>
                <Image
                  quality={80}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  sizes="36x, 26px"
                  src={image}
                  alt="флаг страны"
                ></Image>
              </div>
              <div className={s["text"]}>
                <RootText as="text-lg" fontVariant="russo">
                  Онлайн регистрация на Fonbet Всероссийские соревнования
                  «Памяти Коблева Я.К.»
                </RootText>
              </div>
            </div>
            {page === "home" && (
              <div className={classNames(s["btns"])}>
                <RootButton
                  link="/"
                  role="next-link"
                  appearance="link"
                  styleVariant="2"
                  withArrow
                >
                  Регламент
                </RootButton>
                <RootButton
                  link="/"
                  role="next-link"
                  appearance="link"
                  styleVariant="2"
                  withArrow
                >
                  Онлайн-результаты
                </RootButton>
              </div>
            )}
            {page === "calendar" && (
              <div className={classNames(s["btns"], s[page])}>
                <RootText fontWeightVariant="bold">
                  Юниоры и юниорки (до&nbsp;21&nbsp;года)
                </RootText>
              </div>
            )}
          </div>
        </div>

        {page === "calendar" && (
          <div className={classNames(s["calendar-wrap"])}>
            <div ref={btnRef} className={classNames(s["btns-wrap"])}>
              <button
                onClick={isOpenToggle}
                className={classNames(s["open-btn"])}
              >
                <PointIcon />
              </button>
              <div
                ref={elRefMob}
                className={classNames(
                  s["menu-mobile"],
                  isOpen && s["menu-mobile_open"]
                )}
              >
                <CalendarEventMenu isMobile />
              </div>
            </div>
          </div>
        )}
      </div>
      {page === "calendar" && (
        <div
          ref={elRef}
          className={classNames(s["menu-desk"], isOpen && s["menu-desk_open"])}
        >
          <CalendarEventMenu />
        </div>
      )}
    </div>
  )
}

export default CalendarEventBlock
